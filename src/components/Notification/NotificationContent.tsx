import React from "react";

interface NotificationContentProps {
  text: string;
}

const NotificationContent: React.FC<NotificationContentProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default NotificationContent;
