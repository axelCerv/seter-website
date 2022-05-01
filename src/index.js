import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Custodia from './pages/Custodia'
import Escoltas from './pages/Escoltas'
import GuardiaArmada from './pages/GuardiaArmada'
import Intramuros from './pages/Intramuros'
import Monitoreo from './pages/Monitoreo'


import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import home_es from './translations/es/home.json'
import home_en from './translations/en/home.json'



i18next.init({
  interpolation:{ escapeValue: false },
  lng:"es",
  resources:{
    // ----ESPAÑOL----- 
    es:{
      global: global_es,
      home: home_es
    },
    // ----ENGLISH-----
    en:{
      global: global_en,
      home:home_en
    }
  }
});

ReactDOM.render(
    <Router>
      <I18nextProvider i18n={i18next}>
        <App>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/custodia' element={<Custodia />} />
            <Route exact path='/intramuros' element={<Intramuros />} />
            <Route exact path='/guardia-armado' element={<GuardiaArmada />} />
            <Route exact path='/escoltas' element={<Escoltas />} />
            <Route exact path='/monitoreo' element={<Monitoreo />} />
          </Routes>
        </App>
      </I18nextProvider>
      
    </Router>,
  document.getElementById('root')
);