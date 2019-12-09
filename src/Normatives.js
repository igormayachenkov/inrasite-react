import React from 'react';
import './Normatives.css';

function Normatives() {
  return (
    <div className='page'>

        <div className='box'>
            <h1>Локальные нормативные акты  ООО "ХайКью Мобилайз"</h1>
            <ul>
            <li><a href={global.API_URL+"/files/documents/2018/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B5%D0%B3%D0%BE%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0.pdf"} target="_blank">
					Правила внутреннего трудового распорядка</a></li>
            <li><a href={global.API_URL+'/files/documents/Personal Data Policy.pdf'} target="_blank">
					Политика обработки персональных данных</a></li>
            </ul>
        </div>

    </div>
  );
}

export default Normatives;
