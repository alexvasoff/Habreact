import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string,
    short: boolean,
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { short } = props;
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const { className } = props;

  return (
      <Button onClick={toggle} variable={ButtonVariables.CLEAR} className={classNames('', {}, [className])}>
          {
                t(short ? 'ЯзыкСокр' : 'Язык')
          }
      </Button>
  );
};
