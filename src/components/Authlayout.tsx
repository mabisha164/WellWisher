import React, { ReactNode, useEffect, useState } from "react";

import { RootState } from "../store/store"; // Adjust the path to your store
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedProps {
  children: ReactNode;
  authentication?: boolean;
}

const Protected: React.FC<ProtectedProps> = ({
  children,
  authentication = false,
}) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const [loader, setLoader] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }

    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? <h2>Loading ... </h2> : <>{children}</>;
};

export default Protected;
