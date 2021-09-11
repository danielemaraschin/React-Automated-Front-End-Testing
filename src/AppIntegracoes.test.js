//testes q tem integracao com a api
//nao devemos acessar a API para fazer um test, e nem mesmo no desenv do codigo para evitar expor dados sigilosos

import api from "./api";
import React from 'react';
import { render, screen} from "@testing-library/react";
import App from './App'

describe('Requisções para a API ', () => {
    it('Exibir lista de transações através da API', () => {
        api.listaTransacoes = [
            {
                "valor": 10,
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
            },
            {
                "transacao": "deposito",
                "valor": "20",
                "data": "26/09/2020",
                "id": 2
            },
        ];
        render (<App/>);

    
    expect(screen.getBytestId('transacoes').children.length).toBe(2)
    })
});



