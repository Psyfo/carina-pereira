'use client';

import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

// --- GlobalAlertDialog component ---
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type AlertType = 'success' | 'info' | 'warn' | 'error';

interface AlertState {
  open: boolean;
  type: AlertType;
  title: string;
  message: string;
}

interface AlertContextProps {
  showAlert: (type: AlertType, title: string, message: string) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export function useAlertDialog() {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error('useAlertDialog must be used within AlertProvider');
  return ctx;
}

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    type: 'info',
    title: '',
    message: '',
  });

  const showAlert = useCallback(
    (type: AlertType, title: string, message: string) => {
      setAlert({ open: true, type, title, message });
      setTimeout(() => setAlert((a) => ({ ...a, open: false })), 15000);
    },
    []
  );

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <GlobalAlertDialog
        {...alert}
        onClose={() => setAlert((a) => ({ ...a, open: false }))}
      />
    </AlertContext.Provider>
  );
}

const typeStyles: Record<AlertType, { icon: React.ReactNode; color: string }> =
  {
    success: {
      icon: <CheckCircle className='text-green-600 w-6 h-6' />,
      color: 'text-green-700',
    },
    info: {
      icon: <Info className='text-blue-600 w-6 h-6' />,
      color: 'text-blue-700',
    },
    warn: {
      icon: <AlertTriangle className='text-yellow-600 w-6 h-6' />,
      color: 'text-yellow-700',
    },
    error: {
      icon: <XCircle className='text-red-600 w-6 h-6' />,
      color: 'text-red-700',
    },
  };

function GlobalAlertDialog({
  open,
  type,
  title,
  message,
  onClose,
}: AlertState & { onClose: () => void }) {
  const { icon, color } = typeStyles[type];
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className='flex items-center gap-2'>
            {icon}
            <AlertDialogTitle className={color}>{title}</AlertDialogTitle>
          </div>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
