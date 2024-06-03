import { render } from '@testing-library/react';
import { InstructionsBodies } from './IntructionsBodies'; // Asegúrate de ajustar la importación al archivo correcto

describe('getTextFromInstructionsBodies', () => {
  it('devuelve el array de texto correctamente para instrucciones del cuerpo', () => {
    // Renderizamos el componente con el tipo de ítem 'body'
    const { getByText } = render(<InstructionsBodies typeItem="body" />);
    
    // Verificamos que cada título y descripción estén presentes en el DOM
    expect(getByText('1. Busto')).toBeInTheDocument();
    expect(getByText('Mida desde los puntos debajo de las axilas de un lado a otro.')).toBeInTheDocument();
    expect(getByText('2. Cintura')).toBeInTheDocument();
    expect(getByText('Mida recto la parte más estrecha de la cintura de lado a lado.')).toBeInTheDocument();
    expect(getByText('3. Caderas')).toBeInTheDocument();
    expect(getByText('Mida recto la anchura de la línea de las caderas de un lado a otro')).toBeInTheDocument();
  });

  it('devuelve el array de texto correctamente para instrucciones del producto', () => {
    // Renderizamos el componente con el tipo de ítem 'product'
    const { getByText } = render(<InstructionsBodies typeItem="product" />);
    
    // Verificamos que cada título y descripción estén presentes en el DOM
    expect(getByText('1. Hombro')).toBeInTheDocument();
    expect(getByText('Mida desde donde la costura del hombro se encuentra con la manga de un lado al otro.')).toBeInTheDocument();
    expect(getByText('2. Busto')).toBeInTheDocument();
    expect(getByText('Mida desde los puntos debajo de las axilas de un lado a otro.')).toBeInTheDocument();
    expect(getByText('3. Largo de vestido/ Largo')).toBeInTheDocument();
    expect(getByText('Mida desde donde la costura del hombro se une al cuello hasta el dobladillo.')).toBeInTheDocument();
    expect(getByText('4. Largo de manga')).toBeInTheDocument();
    expect(getByText('Mida desde donde la costura del hombro se encuentra con la sisa hasta el puño.')).toBeInTheDocument();
  });
});
