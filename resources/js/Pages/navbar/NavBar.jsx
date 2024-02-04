import React from 'react';
import classNames from 'classnames';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={classNames('box p-3', styles.navbar)}>
      <div className="container-fluid ">
        <div className="row align-items-center  ">
          {/* First Column */}
          <div className="col-md">
            <ul className="d-flex list-unstyled m-0 p-0 align-items-center justify-content-end  ">
              <li className={classNames("nav-item", styles.navItem)}>
                <img src="./Untitled_logo_1_free-file.jpg" width={50} alt="" />
              </li>
              <li className={classNames("nav-item ms-5", styles.navItem)}>flash Sale</li>
              <li className={classNames("nav-item ms-5", styles.navItem)}>Kelas</li>
              <li className={classNames("nav-item ms-5", styles.navItem)}>Alur Belajar</li>
              <li className={classNames("nav-item ms-5", styles.navItem)}>bootcamp</li>
              <li className={classNames("nav-item ms-5", styles.navItem)}>ressources</li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="col-md d-flex justify-content-end align-items-center">
            <ul className='d-flex list-unstyled m-0 p-0 align-items-center  justify-content-start'>
              <li className={classNames("nav-item ms-5", styles.navItem)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
                <span className={classNames(styles.badge, 'rounded-circle bg-gray ms-2', styles.badge)} style={{ width: '20px', height: '20px', display: 'inline-block' }}></span>
              </li>

              <li className={classNames("nav-item ms-5", styles.navItem)}>Halo Ervalsa</li>
              <li className={classNames("nav-item ms-5", styles.navItem)}>
                <img src="/uifaces-robot-image.jpg" className='rounded-circle' width={30} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
