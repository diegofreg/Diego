package ramos.adriano.raul.api.model;

import lombok.*;
import ramos.adriano.raul.api.utils.DoaRecebe;
import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CANDIDATO")
public class Candidato implements Serializable {
    @Id
    @Column(name = "ID_CANDIDATO")
    private Long id;

    @Column(name = "NOME", length = 200)
    private String nome;

    @Column(name = "CPF", length = 14)
    private String cpf;

    @Column(name = "RG", length = 12)
    private String rg;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DATA_NASCIMENTO", nullable = false)
    private Date data_nasc;

    @Column(name = "SEXO", length = 20)
    private String sexo;

    @Column(name = "MAE", length = 200)
    private String mae;

    @Column(name = "PAI", length = 200)
    private String pai;

    @OneToOne
    @JoinColumn(name = "ID_EMAIL")
    private Email email;

    @OneToOne
    @JoinColumn(name = "ID_ENDERECO")
    private Endereco endereco;

    @OneToOne
    @JoinColumn(name = "ID_TELEFONE")
    private Telefone telefone;

    @OneToOne
    @JoinColumn(name = "ID_CELULAR")
    private Celular celular;

    @Column(name = "ALTURA", precision = 5, scale = 2, columnDefinition = " long default 0")
    private BigDecimal altura;

    @Column(name = "PESO", precision = 5, scale = 2, columnDefinition = " long default 0")
    private BigDecimal peso;

    @Column(name = "TIPO_SANGUINEO", length = 3)
    private String tipoSanguineo;

    public int calculaIdade() {
        Calendar cData = Calendar.getInstance();
        Calendar cHoje = Calendar.getInstance();
        cData.setTime(this.data_nasc);
        cData.set(Calendar.YEAR, cHoje.get(Calendar.YEAR));
        int idade = cData.after(cHoje) ? -1 : 0;
        cData.setTime(this.data_nasc);
        idade += cHoje.get(Calendar.YEAR) - cData.get(Calendar.YEAR);
        return idade;
    }

    public DoaRecebe doaRecebe(){
        return new DoaRecebe().validarTiposSanguineos(this.tipoSanguineo);
    }
}
