import styles from '../MainBanner/MainBanner.module.scss';
/* import MyIcon from './LogOut.svg' */
import  '../Burger/forBurger.scss'
import MyIcon  from './logout.svg?react';
import Burger from '../Burger/Burger'; // Убедитесь, что компоненты Burger импортируются правильно
import { useEffect} from 'react';

const Nav:React.FC = () => {
    useEffect(() => {
        const collectionsButton = document.querySelector(`.${styles.collectionsButton}`) as HTMLElement;
        const additionalBlock = document.querySelector(`.${styles.additionalBlock}`) as HTMLElement;
        const collectionsImage = document.querySelector(`.${styles.collectionsImage}`) as HTMLImageElement;

        const playerButton = document.querySelector(`.${styles.playerInfoSection}`) as HTMLElement;
        const playerBox = document.querySelector(`.${styles.additionalBlockPlayer}`) as HTMLElement;

        const handleCollectionsMouseEnter = () => {
            additionalBlock.style.opacity = '1'; // Показываем блок при наведении
            collectionsImage.style.transform = 'rotate(60deg)'; // Используем transform для поворота
            const handleAdditionalBlockMouseLeave = () => {
                additionalBlock.style.opacity = '0'; 
                collectionsImage.style.transform = 'rotate(0deg'; // Скрываем блок при выводе курсора
                additionalBlock.removeEventListener('mouseleave', handleAdditionalBlockMouseLeave);
            };
            additionalBlock.addEventListener('mouseleave', handleAdditionalBlockMouseLeave);
        };

        const handleCollectionsClick = () => {
            // Переключаем видимость блока при клике
            if (additionalBlock.style.opacity === '1') {
                additionalBlock.style.opacity = '0';
                collectionsImage.style.transform = 'rotate(0deg)';
            } else {
                additionalBlock.style.opacity = '1';
                collectionsImage.style.transform = 'rotate(60deg)';
            }
        };

        const handlePlayerMouseEnter = () => {
            playerBox.style.opacity = '1'; // Показываем блок при наведении
        };

        const handlePlayerMouseLeave = () => {
            playerBox.style.opacity = '0'; // Скрываем блок при выводе курсора
        };

        const checkMouseDistance = (e: MouseEvent) => {
            const rect = playerBox.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Проверяем, находится ли мышь более чем в 100 пикселях от playerBox
            const isFarFromBox = (
                mouseX < rect.left - 50 || 
                mouseX > rect.right + 50 || 
                mouseY < rect.top - 50 || 
                mouseY > rect.bottom + 50
            );

            // Если мышь далеко от playerBox, устанавливаем opacity = 0
            if (isFarFromBox) {
                playerBox.style.opacity = '0';
            }  
        };

        collectionsButton.addEventListener('mouseenter', handleCollectionsMouseEnter);
        collectionsButton.addEventListener('click', handleCollectionsClick);
        playerButton.addEventListener('mouseenter', handlePlayerMouseEnter);
        playerBox.addEventListener('mouseleave', handlePlayerMouseLeave);
        document.addEventListener('mousemove', checkMouseDistance);
        
        playerButton.addEventListener('click', () => {
            // Переключаем видимость блока при клике
            playerBox.style.opacity = playerBox.style.opacity === '1' ? '0' : '1';
        });

        // Убираем обработчики при размонтировании компонента
        return () => {
            collectionsButton.removeEventListener('mouseenter', handleCollectionsMouseEnter);
            collectionsButton.removeEventListener('click', handleCollectionsClick);
            playerButton.removeEventListener('mouseenter', handlePlayerMouseEnter);
            playerBox.removeEventListener('mouseleave', handlePlayerMouseLeave);
            document.removeEventListener('mousemove', checkMouseDistance);
            playerButton.removeEventListener('click', () => {
                playerBox.style.opacity = playerBox.style.opacity === '1' ? '0' : '1';
            });
        };
    }, []);
    return (
        <nav className={styles.section01Nav}>
            <h2 className={styles.section01NavLogo}> PEEXI PUNK</h2>
            <div className={styles.section01NavBox}>
                <div className={styles.section01NavBoxLeft}>
                    <div className={styles.collectionsBox}>
                        <p className={styles.collectionsButton}>
                            Collections
                        </p>
                        <img className={styles.collectionsImage} src="./assets/62edd54fd0033f9609cdd2476f697007.svg" alt="Collections" />
                        <div className={styles.additionalBlock}>
                            <a href="#" className={styles.additionalBlockLink}><img className={styles.additionalBlockIcon} src="./assets/footer/icon.png" alt="icon" />Skins</a>
                            <a href="#" className={styles.additionalBlockLink}><img className={styles.additionalBlockIcon} src="./assets/footer/icon.png" alt="icon" />Weapons</a>
                            <a href="#" className={styles.additionalBlockLink}><img className={styles.additionalBlockIcon} src="./assets/footer/icon.png" alt="icon" />Lands</a>
                        </div>
                    </div>
                    <p className={styles.whitePaperButton}>
                        White paper
                    </p>
                    <p className={styles.blogButton}>
                        Blog
                    </p>
                </div>
                <div className={styles.section01NavBoxRight}>
                    <img className={styles.playerImage} src="./assets/e63792e5c9529a47e04fd34f000ee052.png" alt="Player" />
                    <div className={styles.playerInfoSection}>
                        <p className={styles.playerName}>
                            Harry Brasko
                        </p>
                        <div className={styles.playerIdSection}>
                            <img className={styles.playerIdImage} src="./assets/nav/wallet.svg" alt="Wallet" />
                            <p className={styles.playerIdText}>
                                0xe32b....542d
                            </p>
                        </div>
                    </div>
                    <div className={styles.additionalBlockPlayer}>
                        <img className={styles.additionalBlockPlayerGif} src="./assets/nav/profile.gif" alt="Profile" />
                        <div className={styles.additionalBlockPlayerBox2}>
                            <h3 className={styles.additionalBlockPlayerBox2Title}>Game</h3>
                            <a href="#" className={styles.additionalBlockPlayerLink}>
                                <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/bP.svg" alt="icon" />
                                Battle Pass</a>
                            <a href="#" className={styles.additionalBlockPlayerLink}>
                                <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/2.svg" alt="icon" />
                                Auction</a>
                            <a href="#" className={styles.additionalBlockPlayerLink}>
                                <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/3.svg" alt="icon" />
                                Leader board</a>
                        </div>
                        <div className={styles.additionalBlockPlayerBorderLine}></div>
                        <div className={styles.additionalBlockPlayerBox3}>
                            <h3 className={styles.additionalBlockPlayerBox2Title}>Account</h3>
                            <div className={styles.additionalBlockPlayerBox3Items}>
                                <a href="#" className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/4.svg" alt="icon" />
                                    Profile</a>
                                <a href="#" className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/5.svg" alt="icon" />
                                    Trade</a>
                                <a href="#" className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/6.svg" alt="icon" />
                                    Staking</a>
                                <a href="#" className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/icon/7.svg" alt="icon" />
                                    Support</a>
                            </div>
                            <a href="#" className={`${styles.additionalBlockPlayerLink} ${styles.additionalBlockPlayerLinkLast}`}>                                 
                                    < MyIcon className={styles.additionalBlockPlayerIcon} />
                                    {/* <img className={styles.additionalBlockPlayerIcon} src={MyIcon} alt="Your SVG" /> */}
                                    <span>Log out</span>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section01NavBtn}>
                <div className={styles.section01NavBtnBox}>
                    <button className={styles.playPeexiButton}>Play Demo</button>
           

                    <svg className={styles.section01BtnSvg} viewBox="0 0 236 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9996 1.13155C25.5876 0.720466 26.2877 0.5 27.0051 0.5H232C233.933 0.5 235.5 2.067 235.5 4L235.5 15.9159C235.5 17.0587 234.942 18.1296 234.005 18.7844L211 34.8685C210.412 35.2795 209.712 35.5 208.995 35.5H4C2.067 35.5 0.5 33.933 0.5 32V20.0841C0.5 18.9413 1.05792 17.8704 1.99451 17.2156L24.9996 1.13155Z" stroke="#FEFEFE"/>
                    </svg>  
          
            </div>
        </div>

        <Burger/>
   
        </nav>
    );
}

export default Nav;