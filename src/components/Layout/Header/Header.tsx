import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import css from "./Header.module.scss";

const Header = () => {
  const { pathname } = useRouter();

  const getNavLinkClass = (template: string) => {
    return clsx({ [css.current]: pathname === template });
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={getNavLinkClass("/")}>
          Home
        </Link>
        <Link href="/cart" className={getNavLinkClass("/cart")}>
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
