package ramos.adriano.raul.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PercentualObesidadePorGeneroDTO {
    private String sexo;
    private BigDecimal percentualObesidade;
}
