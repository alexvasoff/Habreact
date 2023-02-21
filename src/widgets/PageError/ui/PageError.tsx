import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';

interface PageErrorProps {
    className?: string
}
export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
      <div className={classNames(cls.pageError, {}, [className])}>
          <p>{t('Упс, ошибочка вышла')}</p>
          <Button variable={ButtonVariables.CLEAR} onClick={reloadPage}>{t('Обновить страницу')}</Button>
      </div>
  );
};
