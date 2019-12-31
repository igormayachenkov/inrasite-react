import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='page'>
      <div className='box'>
        <h1>ADDRESS</h1>
        <div>109129 Москва,<br/>8-я ул.Текстильщиков д.11, стр.2<br/>tel: +7 495 987 4397 </div>
      </div>
      
      <div className="box">
        <h1>VACATIONS SCHEDULE</h1>
        <a href={global.API_URL+'/files/documents/VacSchedule2020.xls'} download>2020 year vacations schedule</a>
      </div>

      <div class="box">
        <h1>HOLIDAYS</h1>
			<a href="http://www.superjob.ru/proizvodstvennyj_kalendar/">Производственный календарь</a>
    </div>

      <div className="clear"></div>
    </div>
  );
}

export default Home;
