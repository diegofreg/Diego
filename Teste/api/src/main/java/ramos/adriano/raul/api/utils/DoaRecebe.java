package ramos.adriano.raul.api.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.util.Arrays;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DoaRecebe {
    List<String> podeDoar;
    List<String> podeReceber;

    public DoaRecebe validarTiposSanguineos(String tipoSanguineo) {
        switch (tipoSanguineo){
            case "A+":
                podeDoar = Arrays.asList("AB+","A+");
                podeReceber = Arrays.asList("A+", "A-", "O+", "O-");
                break;
            case "A-":
                podeDoar = Arrays.asList("A+", "A-", "AB+", "AB-");
                podeReceber = Arrays.asList("A-", "O-");
                break;
            case "B+":
                podeDoar = Arrays.asList("B+" , "AB+");
                podeReceber = Arrays.asList("B+", "B-", "O+" , "O-");
                break;
            case "B-":
                podeDoar = Arrays.asList("B+", "B-", "AB+" , "AB-");
                podeReceber = Arrays.asList("B-" , "O-");
                break;
            case "AB+":
                podeDoar = Arrays.asList("AB+");
                podeReceber = Arrays.asList("A+", "B+", "O+", "AB+", "A-", "B-", "O-" , "AB-");
                break;
            case "AB-":
                podeDoar = Arrays.asList("AB+" , "AB-");
                podeReceber = Arrays.asList("A-", "B-", "O-" , "AB-");
                break;
            case "O+":
                podeDoar = Arrays.asList("A+", "B+", "O+" , "AB+");
                podeReceber = Arrays.asList("O+" , "O-");
                break;
            case "O-":
                podeDoar = Arrays.asList("A+", "B+", "O+", "AB+", "A-", "B-", "O-" , "AB-");
                podeReceber = Arrays.asList("O-");
                break;
        }
        return this;
    }
}
