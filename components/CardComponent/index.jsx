"use client";
import React from "react";
import { Card } from "antd";

export default function CardComponent({
  title = "title",
  style,
  children,
  loading,
  className,
  styleContent,
  type,
  headStyle,
  hidden,
}) {
  return (
    <Card
      type={type}
      className={`card ${className}`}
      title={title}
      headStyle={headStyle}
      hidden={hidden}
      loading={loading}
      // style={{ margin: 15, ...style }}
      style={style}
    >
      <div style={styleContent}>{children}</div>
    </Card>
  );
}
