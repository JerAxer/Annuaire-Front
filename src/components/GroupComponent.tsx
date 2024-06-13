import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  totalBudget?: string;
  component18?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  totalBudget,
  component18,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propColor1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const totalBudgetStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const emptyStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.budgetHeaders}>
        <div className={styles.totalBudget} style={totalBudgetStyle}>
          {totalBudget}
        </div>
        <img className={styles.component18Icon} alt="" src={component18} />
      </div>
      <b className={styles.empty} style={emptyStyle}>
        $85,125.00
      </b>
    </div>
  );
};

export default GroupComponent;
