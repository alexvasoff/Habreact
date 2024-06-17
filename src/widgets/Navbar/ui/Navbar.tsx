import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';
import { LoginModal } from '@/features/Login';
import { authSelector, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/const/localStorage';

interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const authData = useSelector(authSelector);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_KEY);
  };

  if (authData) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button variable={ButtonVariables.CLEAR_INVERTED} onClick={onLogout} className={cls.links}>
                {t('Выйти')}
            </Button>
        </div>
    );
  }

  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <Button variable={ButtonVariables.CLEAR_INVERTED} onClick={openModal} className={cls.links}>
              {t('Войти')}
          </Button>
          <Portal>
              <LoginModal isOpen={isOpen} onClose={onCloseModal} />
          </Portal>
      </div>
  );
};
