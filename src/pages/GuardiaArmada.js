import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Mantenimiento from '../components/Mantenimiento';
import { useLocalStorage } from '../useLocalStorage';


function GuardiaArmada() {

  const [t, i18n] = useTranslation("home");
  const language = useLocalStorage('language')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, []);
  
  return (
      <Mantenimiento />
  );
}

export default GuardiaArmada;
