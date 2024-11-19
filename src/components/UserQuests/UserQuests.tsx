import React, { useState } from "react";
import styles from './UserQuests.module.scss';
import LineTaskIcon from './lineTask.svg?react';

const quests = [
  { id: 1, title: "Add a photo to your profile", actionText: "Follow the link and complete the required action 1", buttonText: "Add 1", activeQuests: false },
  { id: 2, title: "Add a nickname", actionText: "Follow the link and complete the required action 2", buttonText: "Add 2", activeQuests: true  },
  { id: 3, title: "Add mail", actionText: "Follow the link and complete the required action 3", buttonText: "Add 3", activeQuests: true  },
  { id: 4, title: "Connect wallet", actionText: "Follow the link and complete the required action 4", buttonText: "Add 4", activeQuests: true  },
];

const UserQuests: React.FC = () => {
  const [visibleModals, setVisibleModals] = useState<boolean[]>(new Array(quests.length).fill(false));

  const toggleModal = (index: number) => {
    setVisibleModals(prev => {
      const newVisibleModals = [...prev];
      newVisibleModals[index] = !newVisibleModals[index];
      return newVisibleModals;
    });
  };

  return (
    <div>
      <div className={styles.questBox}>
        <h3 className={styles.questTitle}>User account quests</h3>
        <div className={styles.questCount}>
          <p className={styles.questCountDo}>1</p>
          <p className={styles.questCountAll}>/4</p>
        </div>
      </div>
      <div className={styles.questList}>
        {quests.map((quest, index) => (
          <div className={styles.questListItem} key={quest.id}>
            <div className={styles.questListItemMain} onClick={() => toggleModal(index)}>
              <div className={styles.questListBox}>
                <div className={`${styles.questListImg} ${quest.activeQuests ? '' : styles.questListImgActive }`}></div>
                <h3 className={styles.questListTitle}>{quest.title}</h3>
              </div>              
               <LineTaskIcon 
                  className={`${styles.questListLine} ${ visibleModals[index] ? styles.questListLineActive : ''}`}
                  style={{ transform: visibleModals[index] ? "rotate(180deg)" : "rotate(0deg)" }} />
      
        
     
            </div>
            <div className={`${styles.questListModal} ${visibleModals[index] ? styles.show : ''}`}>
              <p className={styles.questListText}>{quest.actionText}</p>
              <button className={styles.questListBtn}>{quest.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuests;
