package ramos.adriano.raul.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FaixaIdadeDTO {
    private Long idadeInicial;
    private Long idadeFinal;
}
