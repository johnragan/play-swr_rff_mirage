export const UnauthenticatedAppRoutes = {
  Login: "/login",
  Start: "/start",
  SignUp: "/signup",
};

export const AuthenticatedAppRoutes = {
  Start: "/start",
  Login: "/login",
  SignUp: "/signup",
  Home: "/home",
};

export const AppRoutes = {
  ...UnauthenticatedAppRoutes,
  ...AuthenticatedAppRoutes,
};

export const getInitialApplicationRoute = ({
  user,
}: {
  user?: string;
}): string => {
  if (!user) {
    //return UnauthenticatedAppRoutes.Login;
    return UnauthenticatedAppRoutes.Start;
  }

  return AuthenticatedAppRoutes.Home;
};
