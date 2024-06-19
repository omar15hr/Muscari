import React from 'react';
import { render, screen } from '@testing-library/react';

import { BodyTableKid } from './BodyTableKid'; 

// Mock data for props
const mockProps = {
  unitsMeasurement: 'CM',
  countrySizes: [
    {
      US: [
        { talla: '8 Years', altura: '122-128', pecho: '66.5-69.5', contorno_cintura: '59.5-62.5' },
        { talla: '9 Years', altura: '128-134', pecho: '69.5-72.5', contorno_cintura: '62.5-65.5' },
        { talla: '10 Years', altura: '134-140', pecho: '72.5-75.5', contorno_cintura: '65.5-68.5' },
        { talla: '11-12 Years', altura: '146-152', pecho: '77-83', contorno_cintura: '70-76' },
        { talla: '13-14 Years', altura: '158-164', pecho: '83-89', contorno_cintura: '76-82' },
      ],
      US_inches: [
        { talla: '8 Years', altura: '48-50.4', pecho: '26.2-27.4', contorno_cintura: '23.4-24.6' },
        { talla: '9 Years', altura: '50.4-52.8', pecho: '27.4-28.5', contorno_cintura: '24.6-25.8' },
        { talla: '10 Years', altura: '52.8-55.1', pecho: '28.5-29.7', contorno_cintura: '25.8-27' },
        { talla: '11-12 Years', altura: '57.5-59.8', pecho: '30.3-32.7', contorno_cintura: '27.6-29.9' },
        { talla: '13-14 Years', altura: '62.2-64.6', pecho: '32.7-35', contorno_cintura: '29.9-32.3' },
      ],
    },
  ],
};

describe('BodyTableKid Component', () => {
  it('renders table with CM measurements by default', () => {
    render(<BodyTableKid {...mockProps} />);
    
    // Check if the table rows rendered correctly
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockProps.countrySizes[0].US.length + 1); // +1 for the header row
    
    // Check specific cell values
    expect(screen.getByText('8 Years')).toBeInTheDocument();
    expect(screen.getByText('122-128')).toBeInTheDocument();
    expect(screen.getByText('66.5-69.5')).toBeInTheDocument();
    expect(screen.getByText('59.5-62.5')).toBeInTheDocument();
  });

  it('renders table with IN measurements when unitsMeasurement is IN', () => {
    const propsWithInches = { ...mockProps, unitsMeasurement: 'IN' };
    render(<BodyTableKid {...propsWithInches} />);
    
    // Check if the table rows rendered correctly for inches measurements
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockProps.countrySizes[0].US_inches.length + 1); // +1 for the header row
    
    // Check specific cell values for inches
    expect(screen.getByText('8 Years')).toBeInTheDocument();
    expect(screen.getByText('48-50.4')).toBeInTheDocument();
    expect(screen.getByText('26.2-27.4')).toBeInTheDocument();
    expect(screen.getByText('23.4-24.6')).toBeInTheDocument();
  });
});
