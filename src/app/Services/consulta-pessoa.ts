import { Injectable } from '@angular/core';
import { Client } from 'src/models/client';

import { HttpService } from './http.service';


interface CepEnderecoPessoa {
    idCep: number;
    numeroCep: string;
    nomeLogradouro: string;
    nomeBairro: string;
    municipio: string;
    ativo: boolean;


}

interface EnderecoPessoa {
    idEndereco: number;
    nomeLogradouro: string;
    nomeBairro: string;
    cep: CepEnderecoPessoa
    numeroEndereco: string;
    correspondencia: boolean;


}
interface Pessoa {
    idPessoa: number;
    endereco: EnderecoPessoa;
    nomePessoa: string;
    tipoPessoa: "F";
    numeroCpfCnpj: string;
    nomeFantasiaOrApelido: string;
    
}


interface Campos {
    cpfcnpj: string;
    nomeprodutor: string;
    nomefantasia: string;
    cep: string;
    enderenço: string;
    numero: string;
    complemento: string;
    bairoo: string;
    municipio: string;
    estado: string;
    registroima: string;

}

interface Masp1 {
    idPessoa: string;
    nomePessoa:string;
    nunMaspOuRegInstituicaoConveniada: number;
    indentificadorCargo: string;
    idPapel:string;
    
    
}




@Injectable({
    providedIn: 'root'
})
export class ConsultaPessoaService {
    getPessoacpf(Pessoacpf: any) {
        throw new Error('Method not implemented.');
    }
    storeClient(client: Client) {
        throw new Error('Method not implemented.');
    }

    
    constructor(private http: HttpService) { }



    public getPessoa(cpfCnpj: string) {
        return this.http.get<Pessoa>(`http://localhost:8080/rada-laboratorios/pessoa/buscarPessoaPorCpfCnpj/${cpfCnpj}`);

    }
    public postPessoacpf(pessoacpf: string) {
        return this.http.post<Campos>(`http://localhost:8080/rada-laboratorios/termoColeta/gravarTermoColeta`, pessoacpf)
    }

    public getPessoamasp(numeromasp: string) {
        return this.http.get<Masp1>(`http://localhost:8080/rada-laboratorios/pessoa/buscarPessoaPorMasp/${numeromasp}`);
    }

}





