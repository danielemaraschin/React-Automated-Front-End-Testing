import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'
describe('Component principal', () => {
    describe('Quando eu abro a app do banco,', () => {

        test(' o nome do banco é exibido ', () => {
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
})