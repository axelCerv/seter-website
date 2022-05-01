import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import usaFlag from '../images/usa-flag.svg'
import mexFlag from '../images/mex-flag.svg'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import logoSeter from '../images/logo-rounded.png';
import { useLocalStorage } from '../useLocalStorage';



function Navbar() {

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    const [click, setClick] = useState(false);

    const currentPath = usePathname();

    const handleMenu = (e) =>{
        setClick(false);
        removeActive();
        e.target.classList.add('active')
    }

    function removeActive(){
        const navMenu = document.querySelectorAll('.item-menu');
        navMenu.forEach((item)=>{
            item.classList.remove('active')
        })
    }

    const activePath = (pathname) =>{
        const navMenu = document.querySelectorAll('.item-menu');
        window.scrollTo(0, 0)
        setClick(false);
        removeActive()
        switch (pathname) {
            case '/':
                navMenu[0].classList.add('active')
                break;
            case '/custodia':
                navMenu[1].classList.add('active')
                break;
            case '/intramuros':
                navMenu[2].classList.add('active')
                break;
            case '/guardia-armado':
                navMenu[3].classList.add('active')
                break;
            case '/escoltas':
                navMenu[4].classList.add('active')
                break;
            case '/monitoreo':
                navMenu[5].classList.add('active')
                break;
            default:
                removeActive()
                navMenu[0].classList.add('active')

        }
    }

    useEffect(() => {
        activePath(currentPath);
    }, [currentPath]);
    

// =================SCROLL MENU RESPONSIVE=================

    useEffect(() => {
        function setScroll(){  
            const body = document.querySelector('body')
            if(click){
                body.classList.add('stop-scrolling')
            }else{
                body.classList.remove('stop-scrolling')
            }           
        }
        setScroll();
    }, [click]);
     
   
    /*================TRANSLATION=================== */


    const [t, i18n] = useTranslation("global");

    const [language, setLanguage] = useLocalStorage('language', '')


    useEffect(() => {
        removeActiveLan()
        i18n.changeLanguage(language)

        const langBtn = document.querySelectorAll('.len-btn1');
        const langBtn2 = document.querySelectorAll('.len-btn2');

        if(language === "es"){
            langBtn[0].classList.add("active")
            langBtn2[0].classList.add("active")
        }
        else if(language === "en"){
            langBtn[1].classList.add("active")
            langBtn2[1].classList.add("active")
        }

    }, [language]);
    
    
    const removeActiveLan = () =>{
        const langBtn = document.querySelectorAll('.btnLan')
        langBtn.forEach(e=>{
            e.classList.remove("active")
        })
    }

    const activeLanguage = (e) =>{
        
        if(e.target.id === "btn-es"){
            setLanguage("es")
        }
        else if(e.target.id === "btn-en"){
            setLanguage("en")
        }

    }


  return (
  <nav className='navMenu'>
      <div className='nav-container'>

        <Link to="/" className='navbar-logo' onClick={activePath}>
            <img src={logoSeter} alt="seter logo" className='logo-menu'/>
        </Link>

        <div className='menu-icon' onClick={()=>setClick(!click)}>
            <box-icon name={click ? 'x' : 'menu'} color="var(--azul-oscuro)" size="md" pull="left"></box-icon>
        </div>

        <div className={click ? 'nav-items active' : 'nav-items'}>
                <Link to="/" onClick={handleMenu} className='item-menu'>
                    { t("navmenu.item1") }
                </Link>

                <Link to="/custodia" onClick={handleMenu} className='item-menu'>
                    { t("navmenu.item2") }
                </Link> 

                <Link to="/intramuros" onClick={handleMenu} className='item-menu'>
                    { t("navmenu.item3") }
                </Link>

                <Link to="/guardia-armado" onClick={handleMenu} className='item-menu'>
                    { t("navmenu.item4") }
                </Link>

                <Link to="/escoltas" onClick={handleMenu} className='item-menu'>
                    { t("navmenu.item5") }
                </Link>

                <Link to="/monitoreo" onClick={handleMenu} className='item-menu'>
                    { t("navmenu.item6") } 
                </Link>
                <div className='language-menu lan-responsive'>

                <button className='btnLan len-btn1' id='btn-es' onClick={activeLanguage}>
                    <img src={mexFlag} alt='' /> ESP
                </button>
                /
                <button className='btnLan len-btn1' id='btn-en' onClick={activeLanguage}>
                    <img src={usaFlag} alt='' /> ING
                </button>
            </div>
            
        </div>

            <div className='language-menu'>
                <button className='btnLan len-btn2' id='btn-es' onClick={activeLanguage}>
                    <img src={mexFlag} alt=''/> ESP
                </button>
                /
                <button className='btnLan len-btn2' id='btn-en' onClick={activeLanguage}>
                    <img src={usaFlag} alt='' /> ING
                </button>
            </div>
        
        
      </div>
  </nav>
  );
}

export default Navbar;
