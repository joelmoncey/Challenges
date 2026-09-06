import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

const ToastContext = createContext(null);

const toastStyles = {
  success: {
    icon: FiCheckCircle,
    className: "border-[#00BFA5] bg-[#ECFDF5] text-[#065F46]",
  },
  error: {
    icon: FiAlertCircle,
    className: "border-[#EF4444] bg-[#FEF2F2] text-[#991B1B]",
  },
  info: {
    icon: FiInfo,
    className: "border-[#673AB7] bg-[#F5F3FF] text-[#4C1D95]",
  },
};

const ToastItem = ({ toast, onDismiss }) => {
  const { icon: Icon, className } = toastStyles[toast.type] || toastStyles.info;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => onDismiss(toast.id), 3500);
    return () => window.clearTimeout(timeoutId);
  }, [onDismiss, toast.id]);

  return (
    <div
      role={toast.type === "error" ? "alert" : "status"}
      className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border px-4 py-3 shadow-lg ${className}`}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 rounded p-0.5 opacity-70 transition hover:opacity-100"
        aria-label="Dismiss notification"
      >
        <FiX className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((toastId) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== toastId));
  }, []);

  const showToast = useCallback((message, type = "info") => {
    const toast = { id: `${Date.now()}-${Math.random()}`, message, type };
    setToasts((currentToasts) => [...currentToasts.slice(-2), toast]);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-100 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};