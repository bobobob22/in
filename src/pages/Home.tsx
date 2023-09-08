import { Link } from "react-router-dom";
import { RouterPaths } from "../router/routerPaths";

export const Home = () => {
  return (
    <main>
      <Link to={RouterPaths.Accountants}>Go to accountants</Link>
    </main>
  );
};
