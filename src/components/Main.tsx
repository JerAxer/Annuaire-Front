import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import GroupComponent from "./GroupComponent";
import EmployeeRows from "./EmployeeRows";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <div className={styles.employeeList}>
        <div className={styles.listHeader}>
          <div className={styles.title}>
            <a className={styles.annuaire}>Annuaire</a>
          </div>
          <div className={styles.listActions}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <Input
                className={styles.frameItem}
                name="Search"
                size="large"
                placeholder="Contact"
                bordered={true}
                prefix={<SearchOutlined />}
              />
            </div>
            <div className={styles.filterButtonWrapper}>
              <Button
                className={styles.filterButton}
                name="addContact"
                type="primary"
              >{`Ajouter un contact `}</Button>
            </div>
            <div className={styles.sortButtonWrapper}>
              <div className={styles.sortButton}>
                <img
                  className={styles.component13Icon}
                  alt=""
                  src="/component-13.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listDivider} />
      <div className={styles.searchResults}>
        <div className={styles.resultsHeader}>
          <div className={styles.resultCount}>
            <h3 className={styles.employee}>Employee</h3>
            <div className={styles.resultsFound}>18 results found</div>
          </div>
          <div className={styles.resultsFilters}>
            <div className={styles.filters}>
              <div className={styles.filterOption}>
                <img
                  className={styles.component17Icon}
                  loading="lazy"
                  alt=""
                  src="/component-17.svg"
                />
              </div>
              <div className={styles.chronologicalSort}>
                <img
                  className={styles.component16Icon}
                  alt=""
                  src="/component-16.svg"
                />
                <div className={styles.sortLabel}>
                  <div className={styles.sortChronological}>
                    Sort: Chronological
                  </div>
                </div>
              </div>
              <div className={styles.dateFilter}>
                <img
                  className={styles.component15Icon}
                  alt=""
                  src="/component-15.svg"
                />
                <div className={styles.dateLabel}>
                  <div className={styles.august2021}>August, 2021</div>
                </div>
                <img
                  className={styles.component14Icon}
                  alt=""
                  src="/component-14.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.budget}>
        <div className={styles.budgets}>
          <GroupComponent
            totalBudget="Total Budget"
            component18="/component-18-4.svg"
          />
          <GroupComponent
            totalBudget="Monthly Budget"
            component18="/component-19.svg"
            propBackgroundColor="#5b6ad0"
            propBackgroundColor1="#5b6ad0"
            propColor="#fff"
            propColor1="#fff"
          />
          <GroupComponent
            totalBudget="Weekly Budget"
            component18="/component-19-1.svg"
            propBackgroundColor="#f8f8f8"
            propBackgroundColor1="#f8f8f8"
            propColor="#757d8a"
            propColor1="#404d61"
          />
          <GroupComponent
            totalBudget="Todays Budger"
            component18="/component-19-1.svg"
            propBackgroundColor="#f8f8f8"
            propBackgroundColor1="#f8f8f8"
            propColor="#757d8a"
            propColor1="#404d61"
          />
        </div>
      </div>
      <div className={styles.employeeTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerColumns}>
            <div className={styles.name}>Name</div>
            <div className={styles.dataIcons}>
              <img
                className={styles.component18Icon}
                alt=""
                src="/component-18-5.svg"
              />
            </div>
          </div>
          <div className={styles.headerColumns1}>
            <div className={styles.email}>Email</div>
            <div className={styles.component18Wrapper}>
              <img
                className={styles.component18Icon1}
                alt=""
                src="/component-18-5.svg"
              />
            </div>
          </div>
          <div className={styles.headerColumns2}>
            <div className={styles.statua}>Statua</div>
            <div className={styles.component18Container}>
              <img
                className={styles.component18Icon2}
                alt=""
                src="/component-18-5.svg"
              />
            </div>
          </div>
          <div className={styles.headerColumns3}>
            <div className={styles.role}>Role</div>
            <div className={styles.component18Frame}>
              <img
                className={styles.component18Icon3}
                alt=""
                src="/component-18-5.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.employeeInfo}>
          <div className={styles.status}>
            <img
              className={styles.statusIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.employeeName}>
              <div className={styles.darleneRobertson}>Darlene Robertson</div>
            </div>
          </div>
          <div className={styles.employeeData}>
            <div className={styles.trungkienspktndgamailcom}>
              trungkienspktnd@gamail.com
            </div>
          </div>
          <div className={styles.employeeData1}>
            <div className={styles.free}>Free</div>
          </div>
          <div className={styles.role1}>
            <div className={styles.reporter}>Reporter</div>
            <div className={styles.roleActions}>
              <div className={styles.roleIcons}>
                <img
                  className={styles.component18Icon4}
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
        </div>
        <div className={styles.employees}>
          <div className={styles.employeeCard}>
            <div className={styles.employeeInfo1}>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarCircleIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-2-1@2x.png"
                />
                <div className={styles.employeeName1}>
                  <div className={styles.devonLane}>Devon Lane</div>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.tranthuynutegmailcom}>
                  tranthuy.nute@gmail.com
                </div>
              </div>
              <div className={styles.contactInfo1}>
                <div className={styles.busy}>Busy</div>
              </div>
              <div className={styles.roleInfo}>
                <div className={styles.roleName}>
                  <div className={styles.botAnalyst}>Bot Analyst</div>
                  <div className={styles.roleBadge}>
                    <div className={styles.badgeIcons}>
                      <img
                        className={styles.component18Icon5}
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
          <EmployeeRows
            employeeStatus="/ellipse-2-2@2x.png"
            codyFisher="Cody Fisher"
            employeeStatus1="/ellipse-2-3@2x.png"
            theresaWebb="Theresa Webb"
            tienlapspktndgmailcom="tienlapspktnd@gmail.com"
            workin="Workin"
            thuhangnutegmailcom="thuhang.nute@gmail.com"
            free="Free"
            salesManager="Sales Manager"
            broadcaster="Broadcaster"
          />
          <EmployeeRows
            employeeStatus="/ellipse-2-4@2x.png"
            codyFisher="Savannah Nguyen"
            employeeStatus1="/ellipse-2-5@2x.png"
            theresaWebb="Eleanor Pena"
            tienlapspktndgmailcom="manhhachkt08@gmail.com"
            workin="Workin"
            thuhangnutegmailcom="vuhaithuongnute@gmail.com"
            free="On Vacation"
            salesManager="Marketer"
            broadcaster="Analytics Admin"
            propMinWidth="197px"
            propColor="#404d61"
            propWidth="491px"
            propColor1="#f9a348"
          />
          <EmployeeRows
            employeeStatus="/ellipse-2-6@2x.png"
            codyFisher="Jenny Wilson"
            employeeStatus1="/ellipse-2-7@2x.png"
            theresaWebb="Marvin McKinney"
            tienlapspktndgmailcom="danghoang87hl@gmail.com"
            workin="Busy"
            thuhangnutegmailcom="binhan628@gmail.com"
            free="Free"
            salesManager="Bot Editor"
            broadcaster="Team Editor"
            propMinWidth="201px"
            propColor="#f63f3f"
            propWidth="435px"
            propColor1="#0064ff"
          />
          <div className={styles.employeeRows}>
            <div className={styles.frameParent}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/ellipse-2-8@2x.png"
                />
                <div className={styles.cameronWilliamsonWrapper}>
                  <div className={styles.cameronWilliamson}>
                    Cameron Williamson
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-2-9@2x.png"
                  />
                  <div className={styles.jeromeBellWrapper}>
                    <div className={styles.jeromeBell}>Jerome Bell</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ckctm12gmailcomWrapper}>
                  <div className={styles.ckctm12gmailcom}>
                    ckctm12@gmail.com
                  </div>
                </div>
                <div className={styles.workingWrapper}>
                  <div className={styles.working}>Working</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.nvtisstnutegmailcomParent}>
                  <div className={styles.nvtisstnutegmailcom}>
                    nvt.isst.nute@gmail.com
                  </div>
                  <div className={styles.busy1}>Busy</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.ppcExpertWrapper}>
                  <div className={styles.ppcExpert}>PPC Expert</div>
                </div>
                <div className={styles.extraPermission}>
                  <img
                    className={styles.component18Icon6}
                    alt=""
                    src="/component-18-9.svg"
                  />
                </div>
                <div className={styles.extraPermission1}>
                  <img
                    className={styles.component19Icon2}
                    alt=""
                    src="/component-19-3.svg"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.teamOwnerParent}>
                  <div className={styles.teamOwner}>Team Owner</div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.component18Parent}>
                      <img
                        className={styles.component18Icon7}
                        loading="lazy"
                        alt=""
                        src="/component-18-9.svg"
                      />
                      <img
                        className={styles.component19Icon3}
                        alt=""
                        src="/component-19-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
