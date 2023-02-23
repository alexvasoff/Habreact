import { render, screen } from '@testing-library/react';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';

describe('Button component', () => {
  test('Button', () => {
    render(
        <Button variable={ButtonVariables.CLEAR}>Test btn</Button>,
    );
    expect(screen.getByText('Test btn')).toBeInTheDocument();
    expect(screen.getByText('Test btn')).toHaveClass('clear');
  });
});
