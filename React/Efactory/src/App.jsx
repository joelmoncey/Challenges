import AppRoutes from "./routes/AppRoutes";
import RouteLoader from "./components/ui/RouteLoader";
import { ToastProvider } from "./components/ui/Toast";

function App() {
  return (
    <ToastProvider>
      <RouteLoader />
      <AppRoutes />
    </ToastProvider>
  );
}

export default App;