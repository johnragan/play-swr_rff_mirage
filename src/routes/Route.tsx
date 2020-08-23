import React, { useEffect } from "react";
import { Route as RouterRoute, RouteProps } from "react-router-dom";

type Props = RouteProps & {
  title: string;
};
export const Route: React.FC<Props> = ({ title, ...props }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <RouterRoute {...props} />;
};
