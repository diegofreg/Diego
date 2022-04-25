package ramos.adriano.raul.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ramos.adriano.raul.api.dto.*;
import ramos.adriano.raul.api.model.Candidato;
import ramos.adriano.raul.api.repository.CandidatoRepository;
import ramos.adriano.raul.api.utils.DoaRecebe;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CandidatoService {

    @Autowired
    private CandidatoRepository candidatoRepository;

    public ResponseEntity<List<CandidatosPorEstadoDTO>> candidatosPorEstado() {
        Optional<List<CandidatosPorEstadoDTO>> listaEstadosQuantidade = candidatoRepository.findCandidatosPorEstados();
        if (listaEstadosQuantidade.isPresent())
            return new ResponseEntity<>(listaEstadosQuantidade.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<List<ImcFaixaIdadeDTO>> imcFaixaIdade() {
        List<Candidato> candidatos = candidatoRepository.findAll();
        List<ImcFaixaIdadeDTO> imcFaixaIdadeDTO = new ArrayList<>();
        Long idadeInicial = 0L;
        while (idadeInicial < 150) {
            FaixaIdadeDTO faixaIdadeDTO = new FaixaIdadeDTO(idadeInicial, idadeInicial + 10);
            BigDecimal media = new BigDecimal(candidatos
                    .stream()
                    .filter(candidato -> faixaIdadeDTO.getIdadeInicial() < candidato.calculaIdade())
                    .filter(candidato -> faixaIdadeDTO.getIdadeFinal() >= candidato.calculaIdade())
                    .mapToDouble(candidato -> calculaIMC(candidato.getAltura(), candidato.getPeso()))
                    .average()
                    .orElse(0));
            if (media.compareTo(BigDecimal.ZERO) != 0)
                imcFaixaIdadeDTO.add(new ImcFaixaIdadeDTO(media.setScale(2, RoundingMode.HALF_UP), faixaIdadeDTO));
            idadeInicial += 10;
        }
        return new ResponseEntity<>(imcFaixaIdadeDTO, HttpStatus.OK);
    }


    public ResponseEntity<List<PercentualObesidadePorGeneroDTO>> percentualObesidadePorGenero() {
        List<Candidato> candidatos = candidatoRepository.findAll();
        //contadores
        Long totalCandidatos = candidatos.stream().count();
        Long totalHomens = candidatos.stream().filter(candidato -> candidato.getSexo().equals("Masculino")).filter(candidato -> calculaIMC(candidato.getAltura(), candidato.getPeso()) > 30).count();
        Long totalMulheres = candidatos.stream().filter(candidato -> candidato.getSexo().equals("Feminino")).filter(candidato -> calculaIMC(candidato.getAltura(), candidato.getPeso()) > 30).count();

        List<PercentualObesidadePorGeneroDTO> retorno = new ArrayList<>();
        //adicionar percentual de Obesos do sexo Masculino
        retorno.add(new PercentualObesidadePorGeneroDTO()
                .builder()
                .sexo("Masculino")
                .percentualObesidade(new BigDecimal(totalHomens * 100 / totalCandidatos))
                .build());

        //adicionar percentual de Obesos do sexo Feminino
        retorno.add(new PercentualObesidadePorGeneroDTO()
                .builder()
                .sexo("Feminino")
                .percentualObesidade(new BigDecimal(totalMulheres * 100 / totalCandidatos))
                .build());

        return new ResponseEntity<>(retorno, HttpStatus.OK);
    }

    private double calculaIMC(BigDecimal altura, BigDecimal peso) {
        return peso.doubleValue() / Math.pow(altura.doubleValue(), 2);
    }

    public ResponseEntity<List<MediaIdadeTipoSanguineoDTO>> mediaIdadeTipoSanguineo() {
        List<Candidato> candidatos = candidatoRepository.findAll();
        Map<String, Double> media = candidatos.stream().collect(Collectors.groupingBy(Candidato::getTipoSanguineo, Collectors.averagingInt(Candidato::calculaIdade)));
        List<MediaIdadeTipoSanguineoDTO> retorno = media.entrySet().stream().map(m -> new MediaIdadeTipoSanguineoDTO(m.getKey(), m.getValue())).collect(Collectors.toList());
        return new ResponseEntity<>(retorno, HttpStatus.OK);
    }

    public ResponseEntity<List<DoadoresTipoSanguineoDTO>> doadoresTipoSanguineo() {
        List<Candidato> candidatos = candidatoRepository.findAll();

        //candidatos entre 16 e 69 anos com peso superior a 50kg
        List<Candidato> candidatosFiltrados = candidatos
                .stream()
                .filter(candidato -> candidato.calculaIdade() >= 16 && candidato.calculaIdade() <= 69)
                .filter(candidato -> candidato.getPeso().doubleValue() >= 50)
                .collect(Collectors.toList());

        //tipos sanguineos
        Map<String, Long> tiposSanguineos = candidatosFiltrados.stream().collect(Collectors.groupingBy(Candidato::getTipoSanguineo, Collectors.counting()));
        List<DoadoresTipoSanguineoDTO> retorno = new ArrayList<>();

        //contagem de doações por tipo sanguineo
        tiposSanguineos.entrySet().forEach(tipoSanguineo -> {
                DoaRecebe doaRecebe = new DoaRecebe().validarTiposSanguineos(tipoSanguineo.getKey());
                Long contadorDoacao = candidatosFiltrados.stream().filter(candidato -> doaRecebe.getPodeDoar().contains(candidato.getTipoSanguineo())).count();
                retorno.add(new DoadoresTipoSanguineoDTO(tipoSanguineo.getKey(),contadorDoacao));
        });
        return new ResponseEntity<>(retorno, HttpStatus.OK);
    }
}
