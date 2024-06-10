import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (name: string) => {
    setName(name);
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
      <div className={classNames(cls.loginForm, {}, [className])}>
          <p>{name}</p>
          <Input onChange={onNameChange} value={name} label="Введите имя" />
          <p>{password}</p>
          <Input onChange={onPasswordChange} label="Введите пароль" />
          <Button className={cls.button} onClick={() => setName('')}>{t('Войти')}</Button>
      </div>
  );
};
