import React from "react";
import { Link } from "react-router-dom";
import styles from './nav.module.css';
import SearchBar from "../../components/SearchBar/searchBar";

const Nav = () => {
  return (
    <div className={styles.containerNav}>
      <nav className="navbar navbar-dark bg-dark ">
        <SearchBar />
        <div className={styles.title}>
          <h1>Code</h1>
          <h1>Community</h1>
        </div>
        <div className="container-fluid">
          <button
            className={`navbar-toggler ${styles['toggle']}`} type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className={`offcanvas-title ${styles['title_toggle']}`} id="offcanvasDarkNavbarLabel">
                Code Community
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className={styles.info}>
                  <li className="nav-item">
                    <Link to="/Contact" className={styles.link} >
                      <h1 className={styles.contact}>Contact</h1>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/register" className={styles.link} >
                      <h1 className={styles.sign}>Sign in</h1>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/login" className={styles.link} >
                      <h1 className={styles.login}>Log in</h1>
                    </Link>
                  </li>

                  <div className={styles.containerLogOut}>
                    <li className="nav-item" >
                      <Link to="/" className={styles.link} >
                        <h1 className={styles.logOut}>Log out</h1>
                      </Link>
                    </li>
                  </div>

                </div>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles['buttonSections']}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: 'white', width: '25%', padding: '7px', marginRight: '5px', marginTop: '5px', color: 'black', borderRadius: '10px', ':hover': { backgroundColor: '#23E871', color: 'white' } }}>
                    SECTIONS
                  </a>


                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li className="nav-item">
                      <Link to="/home" className="dropdown-item" >
                        <h1>Home</h1>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/news" className="dropdown-item" >
                        <h1>Notices</h1>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/communities" className="dropdown-item" >
                        <h1>Community</h1>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Q&A" className="dropdown-item" >
                        <h1>Q&A</h1>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/profile" className="dropdown-item" >
                        <h1>Profile</h1>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
