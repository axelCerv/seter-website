import React, {useEffect} from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../useLocalStorage';




function Footer() {
  
    const [t, i18n] = useTranslation("global");
    const language = useLocalStorage('language')

    useEffect(() => {
    i18n.changeLanguage(language)
    }, []);


  return (
      <footer >
          <div className='footer'>
            <div className='footer-content container'>
                <div className='links-footer'>
                    <Link to="/" className='item-link-footer'>
                        { t("navmenu.item1") }
                    </Link>

                    <Link to="/custodia" className='item-link-footer'>
                        { t("navmenu.item2") }
                    </Link> 

                    <Link to="/intramuros"  className='item-link-footer'>
                        { t("navmenu.item3") }
                    </Link>

                    <Link to="/guardia-armado" className='item-link-footer'>
                        { t("navmenu.item4") }
                    </Link>

                    <Link to="/escoltas"className='item-link-footer'>
                        { t("navmenu.item5") }
                    </Link>

                    <Link to="/monitoreo" className='item-link-footer'>
                        { t("navmenu.item6") } 
                    </Link>
                </div>
                <div className='extra-info'>
                    <div className='extra-links'>
                        <a href="" className='item-link-footer'>{t("footer.cookies")}</a>   
                        <a href="" className='item-link-footer'>{t("footer.blog")}</a>
                        <a href="" className='item-link-footer'>{t("footer.infocopy")}</a>
                        <a href="" className='item-link-footer'>{t("footer.privacy")}</a>
                    </div>
                    
                    <hr />
                    <div className='social-media'>
                        <p>{t("footer.media")}</p>
                        <div className='logos-media'>
                            <a href="" target="_blank" className="icon">
                                <box-icon name='facebook' type='logo' ></box-icon>
                            </a>
                            <a href="" target="_blank" className="icon">
                                <box-icon name='instagram' type='logo' ></box-icon>
                            </a>
                            <a href="" target="_blank" className="icon">
                                <box-icon name='youtube' type='logo'  ></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='location-map'>
                    <h3>{t("footer.location")}</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0213347008976!2d-99.17628378468378!3d19.411484146384588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff42f8b1dbff%3A0xf0f51a9b113fe218!2sAv.%20Tamaulipas%2C%20Colonia%20Condesa%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1643275815026!5m2!1ses-419!2smx"  allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
          </div>
          <div className='copyright'>{t("footer.copyright")} <a href="https://www.yecticmedia.com/" target="_blank" >YECTIC MEDIA</a>©</div>
      </footer>
  );
}

export default Footer;
