import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from '../../../shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar component', () => {
  test('Sidebar', () => {
    renderComponent(
        <Sidebar />,
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Toggle Sidebar', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-btn');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
