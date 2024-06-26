import { Story } from '@storybook/react';
import ThemeProvider, { Theme } from '@/app/providers/ThemePovider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
