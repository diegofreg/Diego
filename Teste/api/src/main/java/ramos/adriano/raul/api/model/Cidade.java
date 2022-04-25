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
@Table(name = "CIDADE")
public class Cidade implements Serializable {
    @Id
    @Column(name = "ID_CIDADE")
    private Long id;

    @Column(name = "CIDADE", length = 20)
    private String cidade;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ID_ESTADO")
    private Estado estado;
}
