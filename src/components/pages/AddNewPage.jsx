import './AddNewPage.css';
import {EMOTIONS} from '../../models/emotionDict'
import {REASONS} from '../../models/reasonsDict'


function AddNewPage () {

    function AddNew(event){
        console.log(event.target.value);
        alert('sds');
    }

    return (
        <div className="page addnewpage">

            <div className="banner">
                <span><br />
                Що Ви відчуваєте сьогодні?
                </span>
            </div>
            

            <form action="" className='addnewform' onSubmit={AddNew}>
                <div className="emotion-box">
                    
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" />
                        <div className="emo-icon">
                            {EMOTIONS.HAPPY}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" />
                        <div className="emo-icon">
                            {EMOTIONS.NORMAL}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" />
                        <div className="emo-icon">
                            {EMOTIONS.PLAYFUL}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" />
                        <div className="emo-icon">
                            {EMOTIONS.SAD}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" />
                        <div className="emo-icon">
                            {EMOTIONS.ANGRY}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" />
                        <div className="emo-icon">
                            {EMOTIONS.NERVOUS}
                        </div>
                    </label>

                </div>

                <select name="" id="" className='reason'>
                    {REASONS.map( (el) => (<option value="">{el}</option>) )}
                </select>

                <textarea name="" id="" cols="30" rows="10" className='description'></textarea>
                <input type="submit" value="Занотувати" className='addnewformbtn'/>
            
            </form>
        </div>
    );

}

export default AddNewPage;