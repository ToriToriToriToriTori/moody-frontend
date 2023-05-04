import './MainPage.css';
import img1 from '../../img/undraw_Conference_girl_write_smth.png';
import {Link} from 'react-router-dom';

function MainPage () {
    return (
        <div className='page mainpage'>
           
           <div className="banner">
                <span>
                Ласкаво просимо до Moody! <br />
                
                </span>
           </div>

            <h2 className='main-ttl'>Moodboard <br/> Про що це?</h2>

            <div className="steps">
                <div className="step">
                    <span className="step-num">1</span>
                    <span className='step-text'>Записуй свої емоції</span>
                </div>
                <div className="step">
                    <span className="step-num">2</span>
                    <span className='step-text'>Переглядай статистику</span>
                </div>
                <div className="step">
                    <span className="step-num">3</span>
                    <span className='step-text'>Слідкуй за стресом</span>
                </div>
                <div className="step">
                    <span className="step-num">4</span>
                    <span className='step-text'>Стань свідомішим</span>
                </div>
            </div>

            <h2 className='main-ttl'>Чому це важливо?</h2>

            <img src={img1} alt="" className='main-illustration' />

            <div className="mainpage-text">
                <p>Багато психологів рекомендують  записувати свої емоції протягом дня.  Ця проста вправа допоможе:</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div>
            <Link to='/profile' className='tryitnow-btn'>
               <button className='tryitnow-btn'>Спробувати зараз</button>
            </Link>
            </div>

           
        </div>
    );
}

export default MainPage;