"use client"
import React from "react";
import { Button } from "antd";

export default function ButtonComponent({
  title = "title",
  disabled = false,
  style,
  onClick,
  hidden,
  htmlType,
  type = "primary",
  className,
  id,
}) {
  return (
    <Button
      id={id}
      className={className}
      type={type}
      htmlType={htmlType}
      disabled={disabled}
      style={{ padding: "0 10px", ...style }}
      onClick={onClick}
      hidden={hidden}
    >
      {title}
    </Button>
  );
}
