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
public class ImcFaixaIdadeDTO {
    private BigDecimal mediaIMC;
    private FaixaIdadeDTO faixaIdade;
}
