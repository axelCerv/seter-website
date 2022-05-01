import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../useLocalStorage';
import Mantenimiento from '../components/Mantenimiento';


function Custodia() {

  const [t, i18n] = useTranslation("home");
  const language = useLocalStorage('language')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, []);

  return (
    <Mantenimiento />
  );
}

export default Custodia;
