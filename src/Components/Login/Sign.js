import React, { useState } from "react";
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
import hashPassword from "../../Actions/HashPassword";

const Sign = () => {
  const [showHideButton, setShowHideButton] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [credential, setCredential] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [condition, setCondition] = useState(false);
  const [remember, setRemember] = useState(false);

  const storeCredentials = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const createUser = async (e) => {
    e.preventDefault();
    let isUsernameAvailable = true;
    for (let i = 0; i < localStorage.length; i++) {
      const storedUsername = localStorage.key(i);
      if (storedUsername === credential.username) {
        isUsernameAvailable = false;
        break;
      }
    }
    document.getElementById("username").style.borderColor =
      "var(--third-accent)";

    // Checking another User is exist or not with same username
    if (isUsernameAvailable) {
      const userPassword = credential.password;
      const hashedPassword = await hashPassword(userPassword);
      //Store Data of New User in LocalStorage
      storeCredentials(credential.username, {
        name: credential.name,
        password: hashedPassword,
      });
      setCredential({ name: "", username: "", password: "" });
      setCondition(false);
      setRemember(false);
    } else {
      document.getElementById("username").style.borderColor = "red";
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <Main>
      <Heading>
        <h1>SIGNUP</h1>
      </Heading>
      <Form className="flex__col center" onSubmit={createUser}>
        <Label htmlFor="username" className="flex__col start">
          <span>Email</span>
          <input
            type="email"
            name="username"
            value={credential.username}
            onChange={handleChange}
            id="username"
            placeholder="Enter Email"
            required
          />
        </Label>

        <Label htmlFor="name" className="flex__col start">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={credential.name}
            onChange={handleChange}
            id="name"
            placeholder="Enter Name"
            required
          />
        </Label>

        <Label htmlFor="password" className="flex__col start">
          <span>Password</span>
          <input
            type={passwordType}
            name="password"
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

export default Sign;
