import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
import EmotionListItem from "../emotion/EmotionListItem";
import { EMOTIONS } from '../../models/emotionDict';
import {REASONS} from '../../models/reasonsDict';
import './CalendarPage.css';


function CalendarPage () {
    const { AuthStatus } = useContext(AuthContext);
    const today = new Date();
    const [pickedDate, setPickedDate] = useState(today.toISOString().slice(0, 10));
    const [emotionList, setEmotionList] = useState([]);

    const [emotionFilter, setEmotionFilter] = useState(null);
    const [reasonFilter, setReasonFilter] = useState(null);


    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setPickedDate(newDate);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/emotions/${AuthStatus.userId}/date/${pickedDate}`);
                const data = await res.json();
                setEmotionList(data.emotions);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [AuthStatus.userId, pickedDate]);

    const handleEmotionFilterChange = (event) => {
        const newFilter = event.target.value || null; // Set filter to null if the value is an empty string
        setEmotionFilter(newFilter);
      };
    
    const handleReasonFilterChange = (event) => {
        const newFilter = event.target.value || null; // Set filter to null if the value is an empty string
        setReasonFilter(newFilter);
    };
    
    const filteredEmotionList = emotionList.filter((item) => {
        if (emotionFilter && item.emotion !== emotionFilter) {
            console.log(item.emotion);
          return false;
        }
        if (reasonFilter && item.reason !== reasonFilter) {
          return false;
        }
        return true;
    });

    return (
        <div className='page'>
            <div className='celendar-filters'>
                <input type="date" id="datePicker" className='celendar-filter' value={pickedDate} onChange={handleDateChange} />
                <select className='celendar-filter' id='emotionfilter' onChange={handleEmotionFilterChange}>
                    <option value="">Емоції</option>
                    {Object.entries(EMOTIONS).map(([key, value]) => (
                        <option value={key}>{value} {key}</option>
                    ))}
                </select>
                <select className='celendar-filter' id='reasonfilter' onChange={handleReasonFilterChange}>
                    <option value="">Причини</option>
                    {REASONS.map( (el) => (<option value={el}>{el}</option>) )}
                </select>
            </div>
            {filteredEmotionList.map((el) => (<EmotionListItem emoitem={el} key={el._id}/>))}
        </div>
    );
}

export default CalendarPage;