package ramos.adriano.raul.api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ENDERECO")
public class Endereco implements Serializable {
    @Id
    @Column(name = "ID_ENDERECO")
    private Long id;

    @Column(name = "CEP", length = 10)
    private String cep;

    @Column(name = "LOGRADOURO", length = 200)
    private String logradouro;

    @Column(name = "NUMERO")
    private Long numero;

    @Column(name = "BAIRRO", length = 200)
    private String bairro;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ID_CIDADE")
    private Cidade cidade;

}
