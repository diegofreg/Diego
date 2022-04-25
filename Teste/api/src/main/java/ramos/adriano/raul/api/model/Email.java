package ramos.adriano.raul.api.model;

import lombok.*;

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
@Table(name = "EMAIL")
public class Email  implements Serializable {
    @Id
    @Column(name = "ID_EMAIL")
    private Long id;

    @Column(name = "EMAIL", length = 300)
    private String email;
}
