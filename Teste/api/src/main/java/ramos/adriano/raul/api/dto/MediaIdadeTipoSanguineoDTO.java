package ramos.adriano.raul.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MediaIdadeTipoSanguineoDTO {
    private String tipoSanguineo;
    private Double mediaIdade;
}
