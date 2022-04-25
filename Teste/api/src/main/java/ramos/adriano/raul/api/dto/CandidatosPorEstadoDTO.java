package ramos.adriano.raul.api.dto;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CandidatosPorEstadoDTO{
    private Long quantidade;
    private String estado;
}
