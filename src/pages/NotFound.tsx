import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="mb-4 text-5xl font-heading font-bold text-foreground">404</h1>
      <p className="mb-8 text-lg text-muted-foreground">Oops! Page not found.</p>
      <Button asChild className="btn-gold">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
