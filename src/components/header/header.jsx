export const Header = ({ showMenu }) => {
  return (
    <header>
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          {showMenu ? (
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </nav>
          ) : (
            <nav className="rollout-nav nav-closed">
              <a href="index.html">Hlavni stranka</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
