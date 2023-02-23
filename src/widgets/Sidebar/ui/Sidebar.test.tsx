import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar component', () => {
  test('Sidebar', () => {
    renderWithTranslation(
        <Sidebar />,
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-btn');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
