import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Input } from '@/shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
      <div>
          {t('Главная')}
          <Input autoFocus />
          <Counter />
      </div>
  );
};

export default MainPage;
