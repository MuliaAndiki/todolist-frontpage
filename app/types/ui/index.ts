import { JSX } from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info' | 'question';
export interface ModalProps {
  title: string;
  icon: ToastType;
  deskripsi: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

export interface ToastProps {
  title: string;
  icon?: ToastType;
  message: string;
  onVoid?: () => void;
}

export interface AlertContexType {
  toast: (p: ToastProps) => void;
  modal: (p: ModalProps) => void;
  confirm: (p: ModalProps) => Promise<boolean>;
}

export interface divProps {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface FallbackProps {
  title: string;
  className?: string;
}

export interface SpreedProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export interface PopUpProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}
