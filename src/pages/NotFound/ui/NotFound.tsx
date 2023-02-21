import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}
export const NotFound = (props: NotFoundProps) => {
  const { className } = props;
  // eslint-disable-next-line no-undef
  const { t } = useTranslation();
  return (
      <div className={classNames(cls.notFound, {}, [className])}>
          <h1>{t('Страница не найдена')}</h1>
      </div>
  );
};
