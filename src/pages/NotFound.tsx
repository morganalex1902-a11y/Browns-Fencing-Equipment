import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-3">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Home className="mr-2 w-5 h-5" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
