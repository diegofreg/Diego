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
@Table(name = "CELULAR")
public class Celular implements Serializable {
    @Id
    @Column(name = "ID_CELULAR")
    private Long id;

    @Column(name = "celular", length = 16)
    private String celular;
}
