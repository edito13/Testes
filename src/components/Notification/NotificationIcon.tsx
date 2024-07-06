import React, { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
  size: "small" | "large";
}

const NotificationIcon: React.FC<NotificationIconProps> = ({
  icon: Icon,
  size,
}) => {
  return (
    <div>
      <Icon className={size} />
    </div>
  );
};

export default NotificationIcon;
