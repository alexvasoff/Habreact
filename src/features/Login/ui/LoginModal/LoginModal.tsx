import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginForm } from '@/features/Login/ui/LoginForm/LoginForm';
import { Modal, ModalProps } from '@/shared/ui/Modal/Modal';

interface LoginModalProps extends ModalProps {}

export const LoginModal = (props: LoginModalProps) => {
  const { className } = props;
  return (
      <Modal className={classNames(cls.loginModal, {}, [className])} lazy {...props}>
          <LoginForm />
      </Modal>
  );
};
