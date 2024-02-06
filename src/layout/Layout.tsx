import { Outlet } from "react-router-dom";

import styles from "./layout.module.css";

const Layout = () => (
  <div className={styles.layout}>
    <Outlet />
  </div>
);

export default Layout;
