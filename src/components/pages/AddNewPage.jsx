import './AddNewPage.css';
import {EMOTIONS} from '../../models/emotionDict'
import {REASONS} from '../../models/reasonsDict'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

function AddNewPage () {

    const { AuthStatus } = useContext(AuthContext);
    const AddNew = async (event) => {
        event.preventDefault();
       
        const uidValue = AuthStatus.userId, emotionValue = event.target.elements.emotion.value, reasonValue = event.target.elements.reason.value, descriptionValue = event.target.elements.description.value;

        try {
            const response = await fetch('http://localhost:5000/api/emotions/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    'uid': uidValue,
                    'emotion': emotionValue,
                    'reason': reasonValue,
                    'description': descriptionValue
                  })
            });
        } catch (err) {
            console.log(err);
        }

        document.getElementById('emotion').value = null;
        document.getElementById('reason').value = '';
        document.getElementById('description').value = '';
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
                        <input type="radio" name="emotion" id="emotion"  value={'HAPPY'}/>
                        <div className="emo-icon">
                            {EMOTIONS.HAPPY}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion" value={'NORMAL'}/>
                        <div className="emo-icon">
                            {EMOTIONS.NORMAL}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion"  value={'PLAYFUL'} />
                        <div className="emo-icon">
                            {EMOTIONS.PLAYFUL}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion"  value={'SAD'} />
                        <div className="emo-icon">
                            {EMOTIONS.SAD}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion"  value={'ANGRY'}/>
                        <div className="emo-icon">
                            {EMOTIONS.ANGRY}
                        </div>
                    </label>
                    <label htmlFor="" className="emotion-radio">
                        <input type="radio" name="emotion" id="emotion"  value={'NERVOUS'}/>
                        <div className="emo-icon">
                            {EMOTIONS.NERVOUS}
                        </div>
                    </label>

                </div>

                <select name="reason" id="reason" className='reason'>
                    {REASONS.map( (el) => (<option value={el}>{el}</option>) )}
                </select>

                <textarea name="description" id="description" cols="30" rows="7" className='description'></textarea>
                <input type="submit" value="Занотувати" className='addnewformbtn'/>
            
            </form>
        </div>
    );

}

export default AddNewPage;