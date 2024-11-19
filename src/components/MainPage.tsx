 
import styles from './MainPage.module.scss';
import { useEffect } from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import Tasks from './Tasks/Tasks';

function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <main className={styles.main}>
     
        <>
          <ProfileNav />
          <Tasks />
           
        </>  
     
    </main>
  );
}

export default MainPage;