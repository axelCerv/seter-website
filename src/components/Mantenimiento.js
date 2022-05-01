import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../useLocalStorage';


function Mantenimiento() {

  const [t, i18n] = useTranslation("global");
  const language = useLocalStorage('language')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, []);

  return (
    <div className='mantenimiento'>
        <div className='headMant'>
            <box-icon 
                name='wrench' 
                animation='tada' 
                rotate='270'
                color='#fff' 
                size='lg'
            >
            </box-icon>
            <h1> { t("maintenance.head") } </h1>
        </div>
    </div>
  )
};

export default Mantenimiento