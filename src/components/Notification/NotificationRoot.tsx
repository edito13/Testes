import React, { ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode;
}

const NotificationRoot: React.FC<NotificationRootProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default NotificationRoot;
