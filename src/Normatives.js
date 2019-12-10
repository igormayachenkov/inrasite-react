import React from 'react';
import './Normatives.css';

function Normatives() {
  return (
    <div className='page'>

      <div className='box'>
        <h1>Локальные нормативные акты  ООО "ХайКью Мобилайз"</h1>
        <ul>
            <li><a href={global.API_URL+'/files/documents/2018/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B5%D0%B3%D0%BE%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0.pdf'} target="_blank">
					Правила внутреннего трудового распорядка</a></li>
            <li><a href={global.API_URL+'/files/documents/Personal Data Policy.pdf'} target="_blank">
					Политика обработки персональных данных</a></li>
            <li><a href={global.API_URL+'/files/documents/2018/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B5%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf'} target="_blank">
              Положение о защите персональных данных</a>
            </li>
            <li>
              <a href={global.API_URL+'/files/documents/2018/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B8%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2.pdf'} target="_blank">
              Положение об оплате труда и материальном стимулировании работинков</a>
            </li>
            <li>
              <a href={global.API_URL+'/files/documents/2018/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9%20%D1%82%D0%B0%D0%B9%D0%BD%D0%B5.pdf'} target="_blank">
              Положение о коммерческой тайне</a>
            </li>
         </ul>
      </div>

      <div className='box'>
        <h1>Охрана труда</h1>
        <ul>
				<li>
					<a href={global.API_URL+'/files/documents/2018/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B5%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D1%8B%20%D1%82%D1%80%D1%83%D0%B4%D0%B0.pdf'} target="_blank">
					Положение о службе охраны труда</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2018/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.pdf'} target="_blank">
					Инструкция по охране труда работников</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2018/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2.pdf'} target="_blank">
					Инструкция по ОТ для специалистов</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2018/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%9F%D0%9A.pdf'} target="_blank">
					Инструкция по ОТ при работе с ПК для пользователей</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2018/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D0%BE%D0%B9%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf'} target="_blank">
					Инструкция по пожарной безопасности</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2018/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B8%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BE%D0%B3%D0%BD%D0%B5%D1%82%D1%83%D1%88%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9.pdf'} target="_blank">
					Инструкция по содержанию и применению огнетушителей</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2017/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%201%20%D0%B7%D0%B0%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B8%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%A1%D0%9E%D0%A3%D0%A2.pdf'} target="_blank">
					Протокол 1 заседания комиссии по проведению СОУТ</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2017/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%A1%D0%9E%D0%A3%D0%A2.pdf'} target="_blank">
					Отчет о проведении СОУТ</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2017/%D0%A1%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B2%D0%B5%D0%B4%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%A1%D0%9E%D0%A3%D0%A2.pdf'} target="_blank">
					Сводная ведомость результатов СОУТ</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2017/%D0%97%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B0.pdf'} target="_blank">
					Заключение эксперта</a>
				</li>
			</ul>

      </div>

      <div className='box'>
        <h1>Инструктажи</h1>
        <ul>
				<li>
					<a href={global.API_URL+'/files/documents/2017/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%B0%D0%B6%20%D0%BF%D0%BE%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf'} target="_blank">
					Инструктаж по электробезопасности</a>
				</li>
				<li>
					<a href={global.API_URL+'/files/documents/2017/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%B0%D0%B6%20%D0%BF%D0%BE%20%D0%93%D0%9E%20%D0%B8%20%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B5%20%D0%BE%D1%82%20%D0%A7%D0%A1.pdf'} target="_blank">
					Инструктаж по ГО и защите от ЧС</a>
				</li>
			</ul>
      </div>
      
      <div className='box'><iframe src="https://www.youtube.com/embed/xT70zDKYz5Y?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/L9usKiZEWR0?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/qEDoaRxcvPQ?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/7DNO25JW3Sw?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/hkjRjVv7gvo?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/nyosXolBgJY?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/Z_Tfy3Gqs-o?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/BusOF9rgqAw?rel=0" frameborder="0" allowfullscreen></iframe></div>
      <div className='box'><iframe src="https://www.youtube.com/embed/cJWcdQ95MCc?rel=0" frameborder="0" allowfullscreen></iframe></div>

    </div>
  );
}

export default Normatives;
