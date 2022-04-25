package ramos.adriano.raul.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ramos.adriano.raul.api.dto.CandidatosPorEstadoDTO;
import ramos.adriano.raul.api.model.Candidato;
import java.util.List;
import java.util.Optional;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {
    @Query(value = "SELECT new ramos.adriano.raul.api.dto.CandidatosPorEstadoDTO(COUNT(CAN.id) AS quantidade, EST.estado)\n" +
            "    FROM Candidato CAN\n" +
            "    INNER JOIN Endereco E ON E.id = CAN.id\n" +
            "    INNER JOIN Cidade C ON C.id = E.id\n" +
            "    INNER JOIN Estado EST ON EST.id =  C.id\n" +
            "    GROUP BY EST.id")
    Optional<List<CandidatosPorEstadoDTO>> findCandidatosPorEstados();




}
