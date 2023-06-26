"use client";
import { Dropdown, Space } from "antd";
import LinkComponent from "../LinkComponent";

export default function DropDownComp() {
  const items = [
    {
      label: (
        <LinkComponent url="/settings">
          <span>Settings</span>
        </LinkComponent>
      ),
      key: "0",
    },
    {
      label: (
        <LinkComponent url="/receipts">
          <span>Receipts</span>
        </LinkComponent>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <span style={{ color: "red" }}>Logout</span>,
      key: "3",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <span style={{ cursor: "pointer" }}>Settings</span>
    </Dropdown>
  );
}
