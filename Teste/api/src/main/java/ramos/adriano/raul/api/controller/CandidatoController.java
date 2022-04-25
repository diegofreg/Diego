package ramos.adriano.raul.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ramos.adriano.raul.api.dto.*;
import ramos.adriano.raul.api.service.CandidatoService;
import java.util.List;

@RestController
@RequestMapping(value = "/v1/candidato")
public class CandidatoController {

    @Autowired
    private CandidatoService candidatoService;

    @RequestMapping(value = "/candidatos-por-estado", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<CandidatosPorEstadoDTO>> candidatosPorEstado() {
        return candidatoService.candidatosPorEstado();
    }

    @GetMapping(value = "/imc-por-faixa-idade")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<ImcFaixaIdadeDTO>> imcFaixaIdade() {
        return candidatoService.imcFaixaIdade();
    }

    @GetMapping(value = "/percentual-obesidade-por-genero")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<PercentualObesidadePorGeneroDTO>> percentualObesidadePorGenero() {
        return candidatoService.percentualObesidadePorGenero();
    }

    @GetMapping(value = "/media-idade-tipo-sanguineo")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<MediaIdadeTipoSanguineoDTO>> mediaIdadeTipoSanguineo() {
        return candidatoService.mediaIdadeTipoSanguineo();
    }

    @GetMapping(value = "/doadores-tipo-sanguineo")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<DoadoresTipoSanguineoDTO>> doadoresTipoSanguineo() {
        return candidatoService.doadoresTipoSanguineo();
    }

}
