import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../useLocalStorage';

import escolta1 from '../images/escolta-1.png'
import bgServices from '../images/bg-services.png';
import bgOffer from '../images/bg-offer.png'
import bgHero from '../images/bg-hero.png'
import bgContact from '../images/bg-contact.png'
import contactImg from '../images/contact-image.png'

import './Home.css'
import ContactForm from '../components/ContactForm';
import scrollreveal from 'scrollreveal';




function Home() {

    const [t, i18n] = useTranslation("home");
    const language = useLocalStorage('language')


    useEffect(() => {
      
      const revealleft = {
        origin: 'left',
        distance:'60px',
        delay: 300,
        viewFactor: 0.5
      }
      const revealRight ={
        origin: 'right',
        distance:'60px',
        delay: 400,
        viewFactor: 0.5
      }

      scrollreveal().reveal('.reveal-left',revealleft);
      scrollreveal().reveal('.reveal-right',revealRight);


      i18n.changeLanguage(language)
    }, []);
    

  return (
  <div className='home'>
    {/* -------------HERO---------------- */}
    <div className='hero'>
      <div className='bg-section'>
        <img src={bgHero} alt="" />
      </div>
      <div className='hero-content container'>
        <div className='hero-item'>
          <div className='image-hero reveal-left'>
            <img src={escolta1} alt="" />
          </div>
          <div className='title-hero reveal-right'>
            <div className='title'>
              <p className='p1'>{t("hero.title1")}</p>
              <p className='p2'>{t("hero.title2")} <b> {t("hero.boldtxt")} </b></p>
              <p className='p3'>{t("hero.title3")}</p>
            </div>
            <a href="#contacto" className='btn-azul'> {t("hero.btn")} </a>
          </div>
        </div>
      </div>
    </div>
    {/* -------------NUESTRA OFERTA---------------- */}
    <div className='offer'>
      <div className='bg-section'>
        <img src={bgOffer} alt="" />
      </div>
      <div className='offer-content container reveal-left'>
        <div className='title-section '>
          <p> {t("offer.title1")} </p>
          <b> {t("offer.title2")} </b>
        </div>
        <div className='offer-text'>
        {t("offer.text")} 
        </div>
        <div className='offer-btn'>
          <a href="" className='btn-azul'>{t("offer.btn")}</a>
        </div>
      </div>
    </div>
    {/* -------------NUESTROS SERVICIOS---------------- */}
    <div className='services'>
      <div className='bg-section'>
        <img src={bgServices} alt="" />
      </div>
      <div className='services-main container'>
        <div className='services-content reveal-right'>
          <div className='title-section'>
            <p> {t("services.title1")} </p>
            <b> {t("services.title2")} </b>
          </div>
          <div className='services-text'>
            <p> {t("services.text1")} </p>
            <ul>
              <li> {t("services.item1")} </li>
              <li> {t("services.item2")} </li>
              <li> {t("services.item3")} </li>
              <li> {t("services.item4")} </li>
              <li> {t("services.item5")} </li>
            </ul>
            <p> {t("services.text2")} </p>
          </div>
          <div className='btn-services'>
            <a href="" className='btn-azul'>{t("services.btn")}</a>
          </div>
        </div>
      </div>
    </div>
    {/* -------------CONTACTO---------------- */}
    <div id='contacto' className='contact'>
      <div className='bg-section'>
        <img src={bgContact} alt="" />
      </div>
      <div className='contact-main container'>
        <div className='contact-content reveal-left'>
          <div className='title-section'>
            <b>{t("contacto.title")}</b>
          </div>
          <p className='txt-contact'>{t("contacto.text1")}</p>
          <ContactForm />
          <div className='whatsapp'>
            <p> {t("contacto.text2")} </p>
            <a href="" className='btn-whats'><box-icon color="#fff" type='logo' name='whatsapp'></box-icon> {t("contacto.whats")} </a>
          </div>
        </div>
        <div className='contact-image reveal-right'>
          <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
