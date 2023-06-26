import Link from "next/link";
import "./style.scss";

export default function LinkComponent({ url, children }) {
  return (
    <Link href={url} className="link">
      {children}
    </Link>
  );
}
