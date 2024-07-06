import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Notification } from "./components/Notification";
import "./index.css";

import { FaVolumeUp } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <div>
      <Notification.Root>
        <Notification.Icon icon={FaVolumeUp} size="large" />
        <Notification.Content text={"Seja bem-vindo"} />
      </Notification.Root>
    </div> */}
  </React.StrictMode>
);
