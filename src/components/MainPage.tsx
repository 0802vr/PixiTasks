import MainBanner from './MainBanner/MainBanner';
import Planet from './Planet/Planet'; 
import Classes from './Classes/Classes';
import SkillTree from './SkillTree/SkillTree';
import Items from './Items/Items';
import Auction from './Auction/Auction';
import ArcadeBanner from './ArcadeBanner/ArcadeBanner';
import Blog from './Blog/Blog';
import EcoSys from './EcoSys/EcoSys';
import Footer from './Footer/Footer';
import styles from './MainPage.module.scss';
import { useEffect } from 'react';

function MainPage() {

  useEffect(() => {
   

    // При загрузке страницы прокручиваем вверх
    window.scrollTo(0, 0);

    
  }, []);

  return (
    <main className={styles.main}>
     
        <>
          <MainBanner />
          <Planet /> 
          <Classes /> 
          <SkillTree />
          <Items />      
          <Auction />
          <ArcadeBanner />
          <EcoSys />
          <Blog />
          <Footer />   
        </>  
     
    </main>
  );
}

export default MainPage;