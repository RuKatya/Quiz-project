import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            <img src="/img/Trivia.png" alt="Trivia" className="btnHome" />
          </Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
