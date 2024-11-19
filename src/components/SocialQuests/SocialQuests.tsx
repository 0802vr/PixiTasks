import React, { useState } from "react";
import styles from './SocialQuests.module.scss';
import LineTaskIcon from './lineTask.svg?react';

const socialQuests = [
  { id: 1, title: "Subscribe to the telegram channel group", actionText: "Share a post on your profile", buttonText: "Share" },
  { id: 2, title: "Subscribe to X", actionText: "Follow a new user", buttonText: "Follow" },
  { id: 3, title: "Subscribe to Discord channel", actionText: "Join a group that interests you", buttonText: "Join" },
  { id: 4, title: "Invite 5 users", actionText: "Like a post from your feed", buttonText: "Like" },
  { id: 5, title: "Invite 10 users", actionText: "Leave a comment on a friend's post", buttonText: "Comment" },
  { id: 6, title: "Invite 20 users", actionText: "Send a message to a friend", buttonText: "Message" },
  { id: 7, title: "Invite 50 users", actionText: "Create an event for your friends", buttonText: "Create" },
  { id: 8, title: "Invite 100 users", actionText: "Post a story on your profile", buttonText: "Post" },
];

const SocialQuests: React.FC = () => {
  const [visibleModals, setVisibleModals] = useState<boolean[]>(new Array(socialQuests.length).fill(false));

  const toggleModal = (index: number) => {
    setVisibleModals(prev => {
      const newVisibleModals = [...prev];
      newVisibleModals[index] = !newVisibleModals[index];
      return newVisibleModals;
    });
  };

  return (
    <div className={styles.SocialQuests}>
      <div className={styles.questBox}>
        <h3 className={styles.questTitle}>Social Media Quests</h3>
        <div className={styles.questCount}>
          <p className={styles.questCountDo}>0</p>
          <p className={styles.questCountAll}>/{socialQuests.length}</p>
        </div>
      </div>
      <div className={styles.questList}>
        {socialQuests.map((quest, index) => (
          <div className={styles.questListItem} key={quest.id}>
            <div className={styles.questListItemMain} onClick={() => toggleModal(index)}>
              <div className={styles.questListBox}>
                <div className={styles.questListImg}></div>
                <h3 className={styles.questListTitle}>{quest.title}</h3>
              </div>              
              <LineTaskIcon 
                className={`${styles.questListLine} ${ visibleModals[index] ? styles.questListLineActive : ''}`}
                style={{ transform: visibleModals[index] ? "rotate(180deg)" : "rotate(0deg)" }} 
              />
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

export default SocialQuests;
