"use client";
import { useCallback, useRef, useState } from "react";
import CardComponent from "../../components/CardComponent";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import LinkComponent from "../../components/LinkComponent";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import "./style.scss";

export default function Login() {
  const defaultValues = useRef({
    email: "",
    password: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const inputs = [
    { label: "Email", placeholder: "Email", name: "email", type: "email" },
    {
      label: "Password",
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    if (!values["email"] || !values["password"]) {
      alert("Fill the inputs");
      return;
    }

    await signIn("credentials", {
      email: values["email"],
      password: values["password"],
      callbackUrl: "/",
    });
  }

  return (
    <CardComponent title="Login" className="login-card-cont">
      <form>
        {inputs.map((el, index) => (
          <InputComponent
            label={el.label}
            placeholder={el.placeholder}
            name={el.name}
            onChange={handleChange}
            type={el.type}
            style={{ marginBottom: 15 }}
            key={index}
          />
        ))}

        <div className="submit-cont">
          <ButtonComponent
            title="Submit"
            htmlType="submit"
            onClick={handleSubmit}
          />
          <LinkComponent url="/signup">
            <p style={{ color: "blue" }}>Signup</p>
          </LinkComponent>
        </div>
      </form>
    </CardComponent>
  );
}
