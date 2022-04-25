package ramos.adriano.raul.api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;


@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TELEFONE")
public class Telefone implements Serializable {
    @Id
    @Column(name = "ID_TELEFONE")
    private Long id;

    @Column(name = "TELEFONE", length = 15)
    private String telefone;

}
