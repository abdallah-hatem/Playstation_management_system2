"use client";
import { useCallback, useRef, useState } from "react";
import CardComponent from "../../components/CardComponent";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import LinkComponent from "../../components/LinkComponent";
import ADD_USER from "../../lib/addUser";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const defaultValues = useRef({
    name: "",
    email: "",
    password: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const inputs = [
    { label: "Name", placeholder: "Name", name: "name" },
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

    const success = await ADD_USER(values);
    if (success) {
      router.push("/login");
    } else {
      alert("!Error");
    }
  }

  return (
    <CardComponent title="SignUp" className="login-card-cont">
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
          <LinkComponent url="/login">
            <p style={{ color: "blue" }}>Login</p>
          </LinkComponent>
        </div>
      </form>
    </CardComponent>
  );
}
