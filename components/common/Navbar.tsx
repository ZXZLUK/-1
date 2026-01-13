import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">conduit</a>
        </Link>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/user/login">
              <a className="nav-link">Sign in</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/user/register">
              <a className="nav-link">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
