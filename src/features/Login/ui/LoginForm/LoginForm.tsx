import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { loginActions } from '@/features/Login';
import { loginSelector } from '@/features/Login/model/selectors/loginSelector/loginSelector';
import { fetchLogin } from '@/features/Login/model/services/login/login';
import { Text } from '@/shared/ui/Text/Text';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    email, password, error, isLoading,
  } = useSelector(loginSelector);

  const onEmailChange = (email: string) => {
    dispatch(loginActions.setEmail(email));
  };

  const onPasswordChange = (password: string) => {
    dispatch(loginActions.setPassword(password));
  };

  const onLoginClick = () => {
    dispatch(fetchLogin({ email, password }));
  };

  return (
      <div className={classNames(cls.loginForm, {}, [className])}>
          <Text title={t('Авторизация')} />
          {error && <Text text={error} theme="error" />}
          <Input onChange={onEmailChange} value={email} label="Введите имя" />
          <Input onChange={onPasswordChange} value={password} label="Введите пароль" type="password" />
          <Button className={cls.button} onClick={onLoginClick} disabled={isLoading}>{t('Войти')}</Button>
      </div>
  );
};
