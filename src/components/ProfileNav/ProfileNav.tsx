import { useState } from "react";

import styles from './ProfileNav.module.scss';

const navItems = [
  { path: "/profile", label: "Profile" },
  { path: "/pre-sale", label: "Pre-sale" },
  { path: "/staking", label: "Staking" },
  { path: "/auction", label: "Auction" },
  { path: "/battle-pass", label: "Battle Pass" },
  { path: "/leader-board", label: "Leader board" },
  { path: "/support", label: "Support" },
  { path: "/tasks", label: "Tasks" },
  { path: "/referals", label: "Referals" }
];

const ProfileNav: React.FC = () => {

  const [activeLink, setActiveLink] = useState("/tasks");

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className={styles.sectionMainMargin}>
        <div  className={styles.ProfileNav}>
            {navItems.map(item => (
            <div
              key={item.path}           
              onClick={() => handleLinkClick(item.path)}
              className={`${styles.ProfileNavTitle} ${activeLink === item.path ? styles.ProfileNavTitleActive : ""}`}
            >
              {item.label}
            </div>
          ))}
        </div>      
    </div>
  );
}

export default ProfileNav;