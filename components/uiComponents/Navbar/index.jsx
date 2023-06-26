import "./style.scss";
import LinkComponent from "../../../components/LinkComponent";
import SignOutButton from "./components/signOutButton";
import { isLoggedIn } from "../../../lib/isUserLoggedIn";

export default async function Navbar() {
  const logged = await isLoggedIn();

  return (
    <div className="navbar-cont">
      <div className="items-cont">
        <LinkComponent url="/">
          <h2>PlayStation.</h2>
        </LinkComponent>

        {logged !== null && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <LinkComponent url="/settings">
              <p style={{ marginRight: 20 }}>Settings</p>
            </LinkComponent>
            {/* <LinkComponent url="/receipts">
              <p style={{ marginRight: 20 }}>Receipts</p>
            </LinkComponent> */}

            <SignOutButton />
          </div>
        )}
      </div>
    </div>
  );
}
