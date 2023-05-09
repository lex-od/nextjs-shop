import Link from "next/link";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={css.nav}>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
