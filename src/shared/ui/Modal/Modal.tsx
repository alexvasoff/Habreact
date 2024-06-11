import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen = false, onClose, lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods = {
    [cls.opened]: isOpen,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyUp = useCallback((e: KeyboardEvent) => {
    console.log('key');
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    console.log('asd');
    if (isOpen) {
      window.addEventListener('keyup', onKeyUp);
    }
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [isOpen, onKeyUp]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
      <div className={classNames(cls.modal, mods, [className])}>
          <div className={classNames(cls.overlay)} onClick={closeHandler}>
              <div className={classNames(cls.content)} onClick={onContentClick}>
                  {children}
              </div>
          </div>
      </div>
  );
};
