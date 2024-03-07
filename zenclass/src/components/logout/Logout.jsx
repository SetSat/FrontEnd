import "./logout.css";
import React, { useContext } from "react";
import DataContext from "../../DataContext/DataContextProvider";

function Logout() {
    const {logoutfunction}= useContext(DataContext)
  return (
    <div>
      <button className="logoutbutton" onClick={()=>logoutfunction()}>Logout</button>
    </div>
  );
}

export default Logout;
