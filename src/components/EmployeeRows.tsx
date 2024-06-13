import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EmployeeRows.module.css";

export type EmployeeRowsType = {
  className?: string;
  employeeStatus?: string;
  codyFisher?: string;
  employeeStatus1?: string;
  theresaWebb?: string;
  tienlapspktndgmailcom?: string;
  workin?: string;
  thuhangnutegmailcom?: string;
  free?: string;
  salesManager?: string;
  broadcaster?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
  propColor1?: CSSProperties["color"];
};

const EmployeeRows: FunctionComponent<EmployeeRowsType> = ({
  className = "",
  employeeStatus,
  codyFisher,
  employeeStatus1,
  theresaWebb,
  tienlapspktndgmailcom,
  workin,
  thuhangnutegmailcom,
  free,
  salesManager,
  broadcaster,
  propMinWidth,
  propColor,
  propWidth,
  propColor1,
}) => {
  const emailsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const workinStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const workStatusListStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const freeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={[styles.employeeRows, className].join(" ")}>
      <div className={styles.statusIconsParent}>
        <div className={styles.statusIcons}>
          <img
            className={styles.employeeStatusIcon}
            alt=""
            src={employeeStatus}
          />
          <div className={styles.employeeNames}>
            <div className={styles.codyFisher}>{codyFisher}</div>
          </div>
        </div>
        <div className={styles.statusIconsWrapper}>
          <div className={styles.statusIcons1}>
            <img
              className={styles.employeeStatusIcon1}
              loading="lazy"
              alt=""
              src={employeeStatus1}
            />
            <div className={styles.employeeNames1}>
              <div className={styles.theresaWebb}>{theresaWebb}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.employeeEmailsParent}>
        <div className={styles.employeeEmails}>
          <div className={styles.emails} style={emailsStyle}>
            <div className={styles.tienlapspktndgmailcom}>
              {tienlapspktndgmailcom}
            </div>
          </div>
          <div className={styles.workStatusList}>
            <div className={styles.workin} style={workinStyle}>
              {workin}
            </div>
          </div>
        </div>
        <div className={styles.workStatusList1} style={workStatusListStyle}>
          <div className={styles.workStatus}>
            <div className={styles.thuhangnutegmailcom}>
              {thuhangnutegmailcom}
            </div>
            <div className={styles.free} style={freeStyle}>
              {free}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.roleList}>
        <div className={styles.role}>
          <div className={styles.salesManager}>{salesManager}</div>
          <div className={styles.rolePermissions}>
            <div className={styles.component18Parent}>
              <img
                className={styles.component18Icon}
                alt=""
                src="/component-18-9.svg"
              />
              <img
                className={styles.component19Icon}
                alt=""
                src="/component-19-3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.roleList1}>
          <div className={styles.role1}>
            <div className={styles.broadcaster}>{broadcaster}</div>
            <div className={styles.rolePermissions1}>
              <div className={styles.component18Group}>
                <img
                  className={styles.component18Icon1}
                  loading="lazy"
                  alt=""
                  src="/component-18-9.svg"
                />
                <img
                  className={styles.component19Icon1}
                  alt=""
                  src="/component-19-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRows;
