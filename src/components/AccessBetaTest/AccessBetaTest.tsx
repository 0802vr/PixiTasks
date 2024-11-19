 
import styles from './AccessBetaTest.module.scss';
  
const AccessBetaTest:React.FC = () => {
   const BetaTest = [
      { title: "Tasks", current: 3, total: 3 },
       
    ];
  
    return (
      <div className={styles.betaTestBox}>
        <h3 className={styles.betaTestTitle}>Access to closed beta test</h3>
        <p className={styles.betaTestText}>To participate in the closed beta testing of the game, you must complete all the proposed tasks. This will allow you to access the test and evaluate the game before its official release.</p>
        {BetaTest.map((test, index) => {
        
          const progressPercentage = (test.current / test.total) * 100;
          
          return (
            <div key={index} className={styles.betaTestUserQuest}>
              <div className={styles.betaTestItems}>
                <h6 className={styles.betaTestSubTitle}>{test.title}</h6>
                <div className={styles.betaTestNum}>
                  <p className={styles.betaTestNumDo}>{test.current}</p>
                  <p className={styles.betaTestNumAll}>/{test.total}</p>
                </div>
              </div>
              <div className={styles.betaTestProgress}>
                <div 
                  className={styles.progressComplete} 
                  style={{ width: `${progressPercentage}%` }} 
                ></div>
              </div>
              {test.current === test.total && (
                <div className={styles.betaTestBtn}>Play closed beta test</div>
              )}
            </div>
          );
        })}
      </div>
    )
}

export default AccessBetaTest;
