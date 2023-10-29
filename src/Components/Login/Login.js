import React, { useEffect, useState } from "react";
import { ReactComponent as HideEye } from "../../Assets/Icons/Hideeye.svg";
import { ReactComponent as OpenEye } from "../../Assets/Icons/Openeye.svg";
import {
  Main,
  Heading,
  Form,
  Label,
  SmallContainer,
  Div,
  Linkbutton,
  Button,
} from "./styled";
import bcrypt from "bcryptjs";

const Login = () => {
  const [showHideButton, setShowHideButton] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [condition, setCondition] = useState(false);
  const [remember, setRemember] = useState(false);

  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });
  const logInUser = async (e) => {
    e.preventDefault();

    document.getElementById("username").style.borderColor =
      "var(--third-accent)";
    document.getElementById("password").style.borderColor =
      "var(--third-accent)";

    const user = JSON.parse(localStorage.getItem(credential.username));
    if (user === null) {
      document.getElementById("username").style.borderColor = "red";
    } else {
      const enteredPassword = credential.password;
      const storedHashedPassword = user.password;
      const isPasswordCorrect = await bcrypt.compare(
        enteredPassword,
        storedHashedPassword
      );
      if (isPasswordCorrect) {
        setCredential({ name: "", username: "", password: "" });
        setCondition(false);
        setRemember(false);
      } else {
        document.getElementById("password").style.borderColor = "red";
      }
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <Main>
      <Heading>
        <h1>Login</h1>
      </Heading>
      <Form className="flex__col center" onSubmit={logInUser}>
        <Label htmlFor="username" className="flex__col start">
          <span>Login ID</span>
          <input
            type="text"
            name="username"
            value={credential.username}
            onChange={handleChange}
            id="username"
            placeholder="Enter Login ID"
            required
          />
        </Label>

        <Label htmlFor="password" className="flex__col start">
          <span>Password</span>
          <input
            type={passwordType}
            name="password"
            autoComplete="off"
            value={credential.password}
            onChange={handleChange}
            id="password"
            placeholder="Password"
            required
          />
          {showHideButton ? (
            <OpenEye
              onClick={() => {
                setPasswordType("password");
                setShowHideButton(false);
              }}
            />
          ) : (
            <HideEye
              onClick={() => {
                setPasswordType("text");
                setShowHideButton(true);
              }}
            />
          )}
        </Label>

        <Div className="flex__row">
          <SmallContainer className="flex__row center">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              name="remember"
              id="remember"
            />
            <label htmlFor="remember">Remember Me</label>
          </SmallContainer>
          <Linkbutton>Change Password</Linkbutton>
        </Div>

        <Div className="flex__row">
          <SmallContainer className="flex__row center">
            <input
              type="checkbox"
              checked={condition}
              onChange={(e) => setCondition(e.target.checked)}
              name="condition"
              id="condition"
              required
            />

            <label htmlFor="condition">
              Agree to{" "}
              <Linkbutton $decoration="underline">Terms & Condition</Linkbutton>
            </label>
          </SmallContainer>
        </Div>

        <Button>Login</Button>
      </Form>
    </Main>
  );
};

export default Login;
