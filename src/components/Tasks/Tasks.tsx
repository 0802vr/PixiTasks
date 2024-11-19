import { useEffect } from "react";
import styles from './Tasks.module.scss';
import UserQuests from "../UserQuests/UserQuests";
import SocialQuests from "../SocialQuests/SocialQuests";
import BlockchainQuests from "../BlockchainQuests/BlockchainQuests";
import Balance from "../Balance/Balance";
import Rewards from "../Rewards/Rewards";
import AccessBetaTest from "../AccessBetaTest/AccessBetaTest";

 
const Tasks:React.FC = () => {
  useEffect(()=> {
     
  
  }, [])
  
  return (
    <div className={styles.sectionMainMargin}>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksLeftEls}>
          <h1 className={styles.tasksContainerTitle}>Tasks</h1>
          <UserQuests/>
          <SocialQuests/>
          <BlockchainQuests/> 
        </div>
        <div className={styles.tasksRigthEls}>
          <Balance/>
          <Rewards/>
          <AccessBetaTest/>
        </div>
    
      </div>
    </div>
    
  );
}

export default Tasks;
