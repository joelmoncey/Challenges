import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const RouteLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.search, location.hash]);

  return isLoading ? <Loader size="lg" fullScreen /> : null;
};

export default RouteLoader;