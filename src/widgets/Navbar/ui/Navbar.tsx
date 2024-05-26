import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';

interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation();
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <Button variable={ButtonVariables.CLEAR_INVERTED} onClick={openModal} className={cls.links}>
              {t('Войти')}
          </Button>
          <Portal>
              <Modal isOpen={isOpen} onClose={onCloseModal}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt porro sunt unde?
              </Modal>
          </Portal>
      </div>
  );
};
