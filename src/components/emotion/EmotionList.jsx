import EmotionListItem from "./EmotionListItem";
import {DAMMY_emotions} from '../../models/emotionDict'

import {useState} from 'react'
 
import './EmoList.css';

function EmotionList (props) {
    const [EmotionList, SetEmotionList] = useState(DAMMY_emotions);

    return (
        <div className="">
            {EmotionList.map( (el) => (<EmotionListItem emoitem={el} />) )}
        </div>
    );
}

export default EmotionList;