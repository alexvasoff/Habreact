import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string
}
export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const { className } = props;

  return (
      <Button onClick={toggle} variable={ButtonVariables.CLEAR} className={classNames(cls.languageSwitcher, {}, [className])}>
          {t('Язык')}
      </Button>
  );
};
