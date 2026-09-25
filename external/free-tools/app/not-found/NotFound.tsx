
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sidebar-bg to-blue-900 font-poppins">
      <div className="max-w-md w-full px-6 py-12 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl">
        <div className="text-center space-y-6">
          <div className="mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <Clock className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">Coming Soon</h1>
          
          <div className="bg-white/20 h-1 w-24 mx-auto rounded-full"></div>
          
          <p className="text-xl text-white/80 mb-6">
            We're working on something amazing for this page.
          </p>
          
          <div className="text-white/60 text-sm mb-8">
            <p>You tried to access: <span className="font-medium">{location.pathname}</span></p>
            <p>This feature is currently under development.</p>
          </div>
          
          <Button 
            variant="default" 
            className="bg-white hover:bg-white/90 text-sidebar-bg font-medium px-8 font-poppins"
            onClick={() => window.location.href = '/'}
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
