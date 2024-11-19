import React from 'react';
import styles from './Rewards.module.scss';

const Rewards: React.FC = () => {
  // Пример данных: здесь вы можете получать данные из props или состояния
  const rewardsData = [
    { title: "User account quests", current: 4, total: 4 },
    { title: "Social quests", current: 3, total: 8 },
    { title: "Blockchain quests", current: 1, total: 4 },
  ];

  return (
    <div className={styles.rewardsBox}>
      <h3 className={styles.rewardsTitle}>Rewards</h3>
      {rewardsData.map((reward, index) => {
        // Вычисляем процент заполнения
        const progressPercentage = (reward.current / reward.total) * 100;
        
        return (
          <div key={index} className={ index === 0 ? styles.rewardsUserQuest : index === 1 ? styles.rewardsSocialQuest : styles.rewardsBlockChainQuest }>
            <div className={styles.rewardsItems}>
              <h6 className={styles.rewardsSubTitle}>{reward.title}</h6>
              <div className={styles.rewardsNum}>
                <p className={styles.rewardsNumDo}>{reward.current}</p>
                <p className={styles.rewardsNumAll}>/{reward.total}</p>
              </div>
            </div>
            <div className={styles.rewardsProgress}>
              <div 
                className={styles.progressComplete} 
                style={{ width: `${progressPercentage}%` }} 
              ></div>
            </div>
            {reward.current === reward.total && (
              <div className={styles.rewardsBtn}>Get an award “30 000 PC”</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Rewards;