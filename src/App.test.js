import React from 'react';
import { fireEvent, getAllByLabelText, getByTestId, getByText, render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App'
describe('Component principal', () => {
    describe('Quando eu abro a app do banco,', () => {

        it(' o nome do banco é exibido ', () => {
            render(<App />);

            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })


        it(' o saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })

        it('Quando eu abro a app do banco, o botão de transações é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })

    describe('Quando eu realizo uma transição', () => {
        it('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const saldoInicial = 150
            const novoSaldo = calcularNovoSaldo(valores, saldoInicial)
            expect(novoSaldo).toBe(100)
        });
        
        it('que é um saque, a transação deve ser realizada', () => {
            const {
                getByText,
                getByTestId,
                getByLabelText
            } = render(<App />);
            const saldo = getByText('R$ 1000'); //R$:1000 is default value, when starting the app
            const transacao = getByLabelText('Saque'); //label Html element
            const valor = getByTestId('valor');
            const botaoTransacao = getByText('Realizar operação');
            expect(saldo.textContent).toBe('R$ 1000')
            //fireEvent is a function from React Test Library to fake a DOM function
            fireEvent.click(transacao, { target: { value: 'saque' } });
            fireEvent.change(valor, { target: { value: 10 }}); //.change para fazer mudanca de valor no input
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990');
        })
    }
    )
})

