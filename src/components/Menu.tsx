import { FunctionComponent } from "react";
import styles from "./Menu.module.css";

export type MenuType = {
  className?: string;
};

const Menu: FunctionComponent<MenuType> = ({ className = "" }) => {
  return (
    <div className={[styles.menu, className].join(" ")}>
      <div className={styles.menuChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.menuItem}>
          <img
            className={styles.menuItemChild}
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
        <div className={styles.user}>
          <div className={styles.welcomeBack}>Welcome back,</div>
          <a className={styles.drax}>Drax</a>
        </div>
        <div className={styles.menuItem1}>
          <img className={styles.menuItemItem} alt="" src="/group-14.svg" />
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.workspace}>
          <div className={styles.search}>
            <div className={styles.workspaceOptions}>
              <div className={styles.eTlphonie}>E-Téléphonie</div>
            </div>
            <img
              className={styles.component18Icon}
              loading="lazy"
              alt=""
              src="/component-18.svg"
            />
          </div>
          <button className={styles.dataTable}>
            <div className={styles.dataTableWrapper}>
              <div className={styles.dataTable1}>Data Table</div>
            </div>
            <img
              className={styles.component18Icon1}
              alt=""
              src="/component-18.svg"
            />
          </button>
          <div className={styles.product}>
            <div className={styles.documentsWrapper}>
              <div className={styles.documents}>Documents</div>
            </div>
            <img
              className={styles.component18Icon2}
              loading="lazy"
              alt=""
              src="/component-18.svg"
            />
          </div>
          <div className={styles.analytics}>
            <div className={styles.connexionWrapper}>
              <div className={styles.connexion}>Connexion</div>
            </div>
            <img
              className={styles.component18Icon3}
              loading="lazy"
              alt=""
              src="/component-18.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.userActions}>
          <div className={styles.support}>
            <div className={styles.actionIcons}>
              <img
                className={styles.component2Icon}
                alt=""
                src="/component-2.svg"
              />
            </div>
            <div className={styles.support1}>Support</div>
          </div>
          <div className={styles.signOut}>
            <div className={styles.component2Wrapper}>
              <img
                className={styles.component2Icon1}
                alt=""
                src="/component-2-1.svg"
              />
            </div>
            <div className={styles.signOut1}>Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
