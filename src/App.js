import "./assets/App.css";
import React from "react";
// import { MemberList } from "./pages/MemberList";
import { PhotoList } from "./pages/PhotoList";

export const App = () => {
  return (
    <div>
      {/* <MemberList /> */}
      <React.StrictMode>
        <PhotoList />
      </React.StrictMode>
    </div>
  );
};
