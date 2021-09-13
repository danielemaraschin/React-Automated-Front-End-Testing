import React from 'react' //because we are testing a react component
import { render, screen, fireEvent} from "@testing-library/react";
import Conta from './Conta'


describe('Componente Conta', () =>{
    it('Exibir o saldo da conta como valor monetário', () =>{
    render(<Conta saldo={1000}/>);
    const saldo = screen.getByTestId('saldo-conta')
  
    expect(saldo.textContent).toBe('R$ 1000');    
    }) 
    
    it('Chama a função realizar transação quando o botão é clicado', () => {
        const funcaoRealizarTransacao = jest.fn() //essa funcao nao faz nd, é só p ver se ela eh chamada ao clicar no botao
    //se essa funcao for chamada, é pq o botao esta chamando a funcao que eh 2do parametro do componente 'conta'
    render(<Conta saldo={1000} realizarTransacao= {funcaoRealizarTransacao} />) //nao é relevante para esse teste o saldo, entao podemos passar um valor qualquer aqui
    
        
    expect(funcaoRealizarTransacao).toHaveBeenCalled
    })
})
