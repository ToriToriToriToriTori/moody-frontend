import './MainPage.css';
import img1 from '../../img/undraw_Conference_girl_write_smth.png';
import {Link} from 'react-router-dom';
import {Pen, Eye, Brain} from "@phosphor-icons/react";

function MainPage () {
    return (
        <div className='page mainpage'>
           
           <div className="banner">
                <span>
                Ласкаво просимо до Moody! <br />
                
                </span>
           </div>

            <h2 className='main-ttl'>Moodboard <br/> Про що це?</h2>

            <div className="features-block">
                <div className="features-block-description">
                    <h4>Завдяки Moody</h4>
                    <h2>Ви зможете:</h2>
                    <h5>відстежувати та керувати своїми емоціями під час стресових ситуацій, може бути дуже актуальним і корисним, особливо під час пандемії чи інших стресових подій.</h5>
                    <Link to='/addnew' className='go-to-link'>Зареєструйтеся тут</Link>
                </div>
                <div className="features-block-features">
                    <div className="features-block-feature">
                        <div className="icon">
                            <Pen></Pen>
                        </div>
                        <h5>Записуй</h5>
                        <h6>свої емоції зручно та швидко</h6>
                        <Link to='/addnew' className='tryitnow-btn'>
                            <button className='tryitnow-btn'>тут</button>
                        </Link>
                    </div>
                    <div className="features-block-feature">
                        <div className="icon">
                            <Eye></Eye>
                        </div>
                        <h5>Переглядай</h5>
                        <h6>їх з можливістю сортування</h6>
                        <Link to='/calendar' className='tryitnow-btn'>
                            <button className='tryitnow-btn'>тут</button>
                        </Link>
                    </div>
                    <div className="features-block-feature">
                        <div className="icon">
                            <Brain></Brain>
                        </div>
                        <h5>Аналізуй</h5>
                        <h6>дані за допомогою професіоналів</h6>
                        <Link to='/calendar' className='tryitnow-btn'>
                            <button className='tryitnow-btn'>тут</button>
                        </Link>
                    </div>
                </div>
            </div>

            <h2 className='main-ttl'>Чому це важливо?</h2>

            <div className="trust-block">
                <div>
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

                        <div className="reaserch-block">
                        <h2 className='main-ttl'>Послання на дослідження по веденню щоденників:</h2>
                            <div className="reaserch">
                                <p>Ведення щоденника або практика письмового запису думок, почуттів і переживань має ряд переваг для психічного здоров’я. Це може допомогти отримати уявлення про свої емоції та покращити самосвідомість.</p>
                                <a href="https://www.instagram.com/p/CqsUb3WNJge/" className="go-to-link">poradnya_psychologycentre</a>
                            </div>
                            <div className="reaserch">
                                <p>Дослідження показали, що рівень стресу та тривоги різко зріс з початку пандемії. Відповідно до дослідження, опублікованого в Journal of Medical Internet Research, під час пандемії програми для психічного здоров’я стають дедалі популярнішими, і багато людей використовують їх, щоб контролювати рівень стресу та тривоги.</p>
                                <a href="https://www.jmir.org/" className="go-to-link">Journal of Medical Internet Research</a>
                            </div>
                            <div className="reaserch">
                                <p>Дослідження, опубліковане в Journal of Affective Disorders, показало, що використання програм для відстеження настрою може допомогти людям керувати своїми емоціями та покращити своє психічне благополуччя.</p>
                                <a href="https://www.psychologytoday.com/" className="go-to-link">Journal of Affective Disorders</a>
                            </div>
                        </div>
                </div>
                <div className="reviews">
                    <h2 className='main-ttl'>Відгуки</h2>
                     <div className="review">
                        <h3>Вероніка Хавро</h3>
                        <h5>Студентка психологічного фукультету УКУ</h5>
                        <p>Відстеження емоцій і виявлення закономірностей у емоційних тригерах може допомогти людям розвинути кращі механізми подолання страхів</p>
                     </div>
                     <div className="review">
                        <h3>Козачишин Ілья</h3>
                        <h5>Веб-девелопер, тестувальник, студент КНУ</h5>
                        <p>Неймовірно продуманий та пророблений до дрібниць застосунок. Ідея - унікальна та актуальна на даний час, як ніколи. Сподобався дизайн та його адаптація під різні екрани.</p>
                     </div>
                     <div className="review">
                        <h3>ChatGPT</h3>
                        <h5>ШІ, модель мовлення, розроблена компанією OpenAI</h5>
                        <p>Загалом додаток було розроблено, щоб задовольнити потреби та очікування цільової аудиторії, допомагаючи користувачам стати більш усвідомленими та ефективніше керувати своїми емоціями.</p>
                     </div>
                </div>
            </div>

           
        </div>
    );
}

export default MainPage;