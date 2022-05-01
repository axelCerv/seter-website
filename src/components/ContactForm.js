import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactForm() {

  const [t] = useTranslation("home");

  return (
        <form 
            action="" 
            className='formulario'
        >
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='btn-azul'>{t("contacto.send")}</button>
        </form>
  );
}

export default ContactForm;

