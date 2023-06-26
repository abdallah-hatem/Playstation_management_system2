import { Input } from "antd";

export default function InputComponent({
  placeholder,
  name,
  onChange,
  type,
  style,
  onKeyUp,
  status,
  label,
  value,
  pattern,
  prefix,
}) {
  return (
    <>
      {label && (
        <label
          htmlFor=""
          style={{ marginBottom: 5, fontWeight: "600", fontSize: 16 }}
        >
          {label + " :"}
        </label>
      )}
      <Input
        pattern={pattern}
        status={status}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        style={style}
        onKeyUp={onKeyUp}
        prefix={prefix}
      />
    </>
  );
}
