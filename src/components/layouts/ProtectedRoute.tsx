import type { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { userCurrentToken } from "../../redux/features/auth/authSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector(userCurrentToken);

  return children;
};

export default ProtectedRoute;
