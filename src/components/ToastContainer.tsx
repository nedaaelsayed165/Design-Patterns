import { useEffect, useState } from 'react';
import { Toast, ToastProps } from './Toast';
import { observable } from './utils';  
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function ToastContainer() {
  const [toasts, setToasts] = useState<Pick<ToastProps, 'id' | 'message' | 'variant'>[]>([]);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const unsubscribe = observable.subscribe((toast) => {
      if (toast === null) {
        setToasts([]);
      } else {
        setToasts(prevToasts => [...prevToasts, toast]);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div
      ref={parent}
      className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs"
    >
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          variant={toast.variant}
          message={toast.message}
          onClose={() =>
            setToasts(prevToasts => prevToasts.filter(t => t.id !== toast.id))
          }
        />
      ))}
    </div>
  );
}
