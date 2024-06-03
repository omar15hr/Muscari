// components/Title.test.tsx
import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  it('renders the title correctly', () => {
    render(<Title title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(<Title title="Test Title" subtitle="Test Subtitle" />);
    const subtitleElement = screen.getByText('Test Subtitle');
    expect(subtitleElement).toBeInTheDocument();
  });

  it('does not render the subtitle when not provided', () => {
    render(<Title title="Test Title" />);
    const subtitleElement = screen.queryByText('Test Subtitle');
    expect(subtitleElement).not.toBeInTheDocument();
  });

  it('applies the custom className', () => {
    render(<Title title="Test Title" className="custom-class" />);
    const container = screen.getByText('Test Title').closest('div');
    expect(container).toHaveClass('custom-class');
  });

  it('renders with the correct font class', () => {
    render(<Title title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toHaveClass('antialiased');
    expect(titleElement).toHaveClass('text-4xl');
    expect(titleElement).toHaveClass('font-semibold');
    expect(titleElement).toHaveClass('my-7');
    expect(titleElement).toHaveClass('mx-4');
  });
});
