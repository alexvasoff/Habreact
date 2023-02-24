import { Story } from '@storybook/react';
import { Theme } from '@/app/providers/ThemePovider';

export const themeDecorators = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
