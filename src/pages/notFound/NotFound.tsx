import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center ">
      <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg">Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
