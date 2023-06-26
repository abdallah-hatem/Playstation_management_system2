"use client";

import { Spin } from "antd";

export default function Loading() {
  return <Spin style={{ margin: "auto" }} tip="Loading" size="large" />;
}
