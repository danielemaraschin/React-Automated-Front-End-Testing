import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente de Transação no extrarto', () => {
    
        it(' o snapshot do componente deve ser sempre o mesmo ', () => {
            const { container} = render(<Transacao
                data="08/09/2020"
                tipo="saque"
                valor="20.00" />);

            expect().toMatchSnapshot();
            });
})
    //container é uma const que o render nos dá
 //o firstchild do container será o elemento HTML já montado  
//ele tem outros elelmentos tb, mas nao usaremos agora