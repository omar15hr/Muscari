import { render } from '@testing-library/react';
import { InstructionsLongSleeve } from './IntructionsLongSleeve'; // Asegúrate de ajustar la importación al archivo correcto

describe('getTextFromInstructionsLongSleeve', () => {
  it('devuelve el array de texto correctamente para instrucciones de manga larga', () => {
    // Renderizamos el componente con el tipo de ítem 'body'
    const { getByText } = render(<InstructionsLongSleeve typeItem="body" />);
    
    // Verificamos que cada título y descripción estén presentes en el DOM
    expect(getByText('1. Tu Busto')).toBeInTheDocument();
    expect(getByText('Mide la circunferencia sobre la parte más completa de tu pecho.')).toBeInTheDocument();
    expect(getByText('2. Tu Cintura')).toBeInTheDocument();
    expect(getByText('Mida desde los puntos debajo de las axilas de un lado a otro.')).toBeInTheDocument();
    expect(getByText('3. Tus Caderas')).toBeInTheDocument();
    expect(getByText('Mide el contorno total de tus caderas')).toBeInTheDocument();
  });

  it('devuelve el array de texto correctamente para instrucciones del producto', () => {
    // Renderizamos el componente con el tipo de ítem 'product'
    const { getByText } = render(<InstructionsLongSleeve typeItem="product" />);
    
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
