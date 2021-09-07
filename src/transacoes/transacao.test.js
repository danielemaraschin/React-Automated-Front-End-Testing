import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente de Transação no extrato', () => {
    
        it('O snapshot do componente deve ser sempre o mesmo ', () => {
            const { container} = render(<Transacao //FAZ DESTRUCTURING  DO RENDER
                data="08/09/2020"
                tipo="saque"
                valor="20.00"
            />);

            expect(container.firstChild).toMatchSnapshot();
        })
});
//sempre c    
//container é uma const que o render nos dá
 //o firstchild do container será o elemento HTML já montado  
//ele tem outros elelmentos tb, mas nao usaremos agora
//comitar o arquivo de snapshots para que o servidor consiga fazer a comparação
