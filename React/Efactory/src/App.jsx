import AppRoutes from "./routes/AppRoutes";
import RouteLoader from "./components/ui/RouteLoader";

function App() {
  return (
    <>
      <RouteLoader />
      <AppRoutes />
    </>
  );
}

export default App;