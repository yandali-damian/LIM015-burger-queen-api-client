import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* 
 * render: nos permite renderizar el componente (como lo haría React)
 * screen: su utilidad para buscar elementos de la misma manera que lo hace el usuario
 */