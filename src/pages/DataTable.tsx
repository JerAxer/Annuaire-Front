import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Main from "../components/Main";
import styles from "./DataTable.module.css";

const DataTable: FunctionComponent = () => {
  return (
    <div className={styles.dataTable}>
      <main className={styles.topbar}>
        <Menu />
        <section className={styles.content}>
          <Main />
        </section>
      </main>
    </div>
  );
};

export default DataTable;
