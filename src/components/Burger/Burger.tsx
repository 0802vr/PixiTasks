import { useEffect, useState } from 'react';
import './Burger.scss';
import './forBurger.scss'
import styles from "../MainBanner/MainBanner.module.scss"
import { playerBurgerText } from './playerBurger';

const burgerList = {
    burger :`
<div class ="burger_menu_container">
        <div class ="burger_line"></div>
        <div class ="burger_box">
            <div class ="burger_box_2">
                <h3 class ="burger_title">Collections 
                <svg class ="burger_title_svg" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12L13.9282 0H0.0717969L7 12Z" fill="#121212"/>
                    </svg>
                </h3>
                <div class ="burger_box_links">
                    <p class ="burger_box_link">Skins</p>
                    <p class ="burger_box_link">Weapons</p>
                    <p class ="burger_box_link">Lands</p>
                </div>
                
            </div>
            <h3 class ="burger_title">White paper</h3>
            <h3 class ="burger_title">Blog</h3>
        </div>
        <div class ="burger_menu_btn_box">
            <button class ="burger_menu_btn">Play Demo</button>
            <img  class ="burger_menu_btn_img" src="./assets/burger/svgB.svg" alt="icon"/>
               
             
        </div> 
    </div>
    `}
const Burger:React.FC = () => {
    const [openModal, setOpenModal]= useState(false);
    const [modalPlace, setModalPlace]= useState('');
    useEffect(()=> {
        if (window.innerWidth < 1250) { 
            
            const burger = document.querySelector(`.burger`)!;
            const burger_btn = document.querySelector('.burger_btn');
            const lineBurger1 = document.querySelector('.burgerLine1');
            const lineBurger2 = document.querySelector('.burgerLine2');
            const lineBurger3 = document.querySelector('.burgerLine3');
            const burger_Back = document.querySelector('.burger_Back');
            const burger_menu = document.querySelector('.burger_menu')!;
            const burgerMenuContainer = document.querySelector('.burger_menu_container');
            const section01NavBox = document.querySelector(`.${styles.section01NavBox}`);        
            const playerBurger = document.querySelector(`.${styles.section01NavBoxRight}`);     
           
             
            function handleBurger() {
               
                if(!openModal){
                    addBurger()
                    setOpenModal(true)
                }
                else {
                   if(modalPlace === 'player'){
                    removeBurger()
                    removeNavBox_Active()
                    setOpenModal(false)
                    burgerMenuContainer!.innerHTML = '';
                    setModalPlace('')
                    removeBtn_Burger();
                    return
                   }
                }
                burgerMenuContainer!.innerHTML = playerBurgerText;
                setModalPlace('player');
                console.log(openModal, modalPlace)
                addBtn_Burger()
                addNavBox_Active()
            } 
            function handlePlayer(){
                console.log(burger)            
                if(!openModal){
                    addBurger();                    
                    setOpenModal(true);
                }
                else {
                    if(modalPlace === 'burger'){
                        removeBurger()
                        setOpenModal(false)
                        burgerMenuContainer!.innerHTML = '';
                        removeBtn_Burger();
                        setModalPlace('');
                        return
                       }
                }
                setModalPlace('burger');
                burgerMenuContainer!.innerHTML = burgerList.burger
                removeNavBox_Active()                
                addBtn_Burger()
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function handleBurger_menu(e:any){
               
                if(e.target?.classList[0] === 'burger_menu'){
                    console.log(e.target.classList[0])
                    /* toggleBurger();  */
                    removeBurger()
                    removeBtn_Burger();
                    removeNavBox_Active();
                    setModalPlace('');
                    setOpenModal(false);
                    burgerMenuContainer!.innerHTML = '';
                    
                }
            }
            playerBurger?.addEventListener('click', handleBurger);
            
            burger?.addEventListener('click',  handlePlayer);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            burger_menu?.addEventListener('click', (e:any) => {
                handleBurger_menu(e)
                 
            });
            
            function addBurger() {
                document.body.classList.add('overflow-hidden'); //menu
                burger.classList.add('burgerActive');                 
                section01NavBox?.classList.add(styles.section01NavBox_Active);            
                burger_menu.classList.add('burger_menu_active');
                section01NavBox?.classList.add(styles.section01NavBox_Active_2);
            }
            function removeBurger() {
                document.body.classList.remove('overflow-hidden'); //menu
                burger.classList.remove('burgerActive');                 
                section01NavBox?.classList.remove(styles.section01NavBox_Active);            
                burger_menu.classList.remove('burger_menu_active');
                section01NavBox?.classList.remove(styles.section01NavBox_Active_2);
            }
            function addBtn_Burger(){
                if(!burger_btn?.classList.contains('burger_btn_Active')){
                    burger_btn?.classList.add('burger_btn_Active');
                    lineBurger1?.classList.add('lineActive');
                    lineBurger2?.classList.add('lineActive');
                    lineBurger3?.classList.add('lineActive');
                    burger_Back?.classList.add('burger_Back_Active');
                }
                
                const burger_box_2 = document.querySelector('.burger_box_2');
            
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                burger_box_2?.addEventListener('click', (e:any)=> {
                
                    if(e.target!.className !== 'burger_title' && e.target!.className !== 'burger_box_link' && burger_box_2.classList.contains('burger_box_2_Active')) {
                        console.log(e.target!.className)
                        burger_box_2?.classList.remove('burger_box_2_Active')
                        return
                    }
                    if(!burger_box_2.classList.contains('burger_box_2_Active')){
                        burger_box_2?.classList.add('burger_box_2_Active')
                    }
                });
            }
            function removeBtn_Burger(){
                if(burger_btn?.classList.contains('burger_btn_Active')){
                    burger_btn?.classList.remove('burger_btn_Active');
                    lineBurger1?.classList.remove('lineActive');
                    lineBurger2?.classList.remove('lineActive');
                    lineBurger3?.classList.remove('lineActive');
                    burger_Back?.classList.remove('burger_Back_Active');
                }
            }
            function addNavBox_Active(){
                if(!section01NavBox?.classList.contains(styles.section01NavBox_Active_2)){
                    section01NavBox?.classList.add(styles.section01NavBox_Active_2);
                }
                
            }
            function removeNavBox_Active(){
                if(section01NavBox?.classList.contains(styles.section01NavBox_Active_2)){
                    section01NavBox?.classList.remove(styles.section01NavBox_Active_2);
                }
                 
            }
            return () => {
                playerBurger?.removeEventListener('click', handleBurger);
                burger?.removeEventListener('click', handlePlayer);
                burger_menu?.removeEventListener('click', (e) => {
                    handleBurger_menu(e)
                     
                });
            }
        }
    }, [modalPlace, openModal])
    
        
    return (
        <>
            <div className="burger">
                <button className="burger_btn">
                    <img className="burgerLine burgerLine1" src="./assets/burger/burgerLine.svg" alt="line" />
                    <img className="burgerLine burgerLine2" src="./assets/burger/burgerLine.svg" alt="line" />
                    <img className="burgerLine burgerLine3" src="./assets/burger/burgerLine.svg" alt="line" />

                </button>

                <svg className="burger_Back" width="66" height="36" viewBox="0 0 66 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_238_2924" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.89531 8.72709C0.71705 9.45614 0 10.743 0 12.1286V32C0 34.2091 1.79086 36 4 36H48.8629C49.6064 36 50.3353 35.7927 50.9676 35.4015L64.1047 27.2729C65.283 26.5439 66 25.257 66 23.8714V3.99999C66 1.79086 64.2091 0 62 0H17.1371C16.3936 0 15.6647 0.207251 15.0324 0.598486L1.89531 8.72709Z" />
                    </mask>
                    <path d="M64.1047 27.2729L64.6309 28.1233L64.1047 27.2729ZM50.9676 35.4015L50.4414 34.5511L50.9676 35.4015ZM-1 12.1286V32H1V12.1286H-1ZM4 37H48.8629V35H4V37ZM51.4937 36.2519L64.6309 28.1233L63.5785 26.4225L50.4414 34.5511L51.4937 36.2519ZM67 23.8714V3.99999H65V23.8714H67ZM62 -1H17.1371V1H62V-1ZM14.5063 -0.251892L1.36914 7.87671L2.42148 9.57746L15.5586 1.44886L14.5063 -0.251892ZM17.1371 -1C16.2077 -1 15.2966 -0.740936 14.5063 -0.251892L15.5586 1.44886C16.0328 1.15544 16.5795 1 17.1371 1V-1ZM67 3.99999C67 1.23857 64.7614 -1 62 -1V1C63.6569 1 65 2.34314 65 3.99999H67ZM64.6309 28.1233C66.1037 27.212 67 25.6034 67 23.8714H65C65 24.9106 64.4622 25.8757 63.5785 26.4225L64.6309 28.1233ZM48.8629 37C49.7923 37 50.7034 36.7409 51.4937 36.2519L50.4414 34.5511C49.9672 34.8446 49.4205 35 48.8629 35V37ZM-1 32C-1 34.7614 1.23858 37 4 37V35C2.34314 35 1 33.6569 1 32H-1ZM1 12.1286C1 11.0894 1.53779 10.1243 2.42148 9.57746L1.36914 7.87671C-0.103688 8.78802 -1 10.3966 -1 12.1286H1Z" fill="#FEFEFE" mask="url(#path-1-inside-1_238_2924)" />
                </svg>
            </div>
            <div className="burger_menu">

                <div className="burger_menu_container">

                </div>

            </div>
        </>
        
    )
}
export default Burger;