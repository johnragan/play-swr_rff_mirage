import React from "react";

import { Router } from "./Router";
// import { AuthRouter } from 'routes/AuthRouter';
// import { useAuth } from 'auth/useAuth';

export const SelectRouter: React.FC = () => {
  //const { user } = useAuth();
  //return user ? <AuthRouter /> : <Router />;
  return <Router />;
};
