import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home-page'>
      <div className='box'>
          <div className="content">
            <h1>ADDRESS</h1>
            <div>109129 Москва,<br/>8-я ул.Текстильщиков д.11, стр.2<br/>tel: +7 495 987 4397 </div>


          </div>
      </div>
      
      <div className="box">
          <div className="content">
              <h1>VACATIONS SCHEDULE</h1>
            <a href="/documents/VacSchedule2019.xls" download>2019 year vacations schedule</a>
          </div>
      </div>

      <div class="box">
        <div class="content">
            <h1>HOLIDAYS</h1>
			1, 2, 3, 4, 5, 6, 8 января — Новогодние каникулы;<br/>     
			7 января — Рождество Христово;<br/>     
			23 февраля — День защитника Отечества;<br/>     
			8 марта — Международный женский день;<br/>     
			1 мая — Праздник Весны и Труда;<br/>     
			9 мая — День Победы;<br/>     
			12 июня — День России;<br/>     
			4 ноября — День народного единства;<br/>     
			<br/>
			Постановлением Правительства Российской Федерации "О переносе выходных дней в 2015 году" от 27 августа 2014 г. № 860 предусмотрен перенос выходных дней:<br/>     
			3 января (сб) → 9 января (пт) <br/>    
			4 января (вс) → 4 мая (пн)	<br/>
			<br/>
			Для тех, кто не понял алгоритм, решение тут:<br/>
			<a href="http://www.superjob.ru/proizvodstvennyj_kalendar/">Производственный календарь</a>
			
			
        </div>
    </div>

      <div className="clear"></div>
    </div>
  );
}

export default Home;
