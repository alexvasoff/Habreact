import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { loginActions } from '@/features/Login';
import { loginSelector } from '@/features/Login/model/selectors/loginSelector/loginSelector';
import { fetchLogin } from '@/features/Login/model/services/login/login';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { email, password } = useSelector(loginSelector);

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
          <p>{email}</p>
          <Input onChange={onEmailChange} value={email} label="Введите имя" />
          <p>{password}</p>
          <Input onChange={onPasswordChange} label="Введите пароль" />
          <Button className={cls.button} onClick={onLoginClick}>{t('Войти')}</Button>
      </div>
  );
};
