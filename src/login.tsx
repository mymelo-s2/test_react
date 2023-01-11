import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./userinfo.json";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputPassword, setInputPasswordElement] = useState("");
  const [inputUserName, setInputUserNameElement] = useState("");
  const printText = () => {
    const userInfo = Data.filter((data: any) => {
      return data.name === inputUserName;
    });
    if (
      userInfo.length === 1 &&
      userInfo[0].name === inputUserName &&
      userInfo[0].pass === inputPassword
    ) {
      navigate("/samplelist", { state: { userName: userInfo[0].name } });
    } else {
      setInputPasswordElement("");
      setInputUserNameElement("");
    }
  };
  return (
    <div className="login">
      <div className="formzone">
        <div>
          <input
            value={inputUserName}
            onChange={(e) => setInputUserNameElement(e.target.value)}
            type="text"
            placeholder="username"
            className="textbox"
          />
        </div>
        <div>
          <input
            value={inputPassword}
            onChange={(e) => setInputPasswordElement(e.target.value)}
            type="password"
            placeholder="password"
            className="textbox"
          />
        </div>
        <div>
          <button onClick={() => printText()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
