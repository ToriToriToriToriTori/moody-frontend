import './StatisticPage.css'
import {XYPlot, LineSeries} from 'react-vis';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

function StatisticPage() {

    const { AuthStatus } = useContext(AuthContext);

    const [theMostCommonEmotion, setTheMostCommonEmotion] = useState('');
    const [theMostCommonReason, setTheMostCommonReason] = useState('');
    const [reasonOfPositive, setReasonOfPositive] = useState('');
    const [reasonOfNegative, setReasonOfNegative] = useState('');
  
    useEffect(() => {
      async function fetchStatistics() {
        try {
          const emotionResponse = await fetch(`http://localhost:5000/api/emotions/${AuthStatus.userId}/statistics/theMostCommonEmotion`);
          const emotionData = await emotionResponse.json();
          setTheMostCommonEmotion(emotionData.emotion);
  
          const reasonResponse = await fetch(`http://localhost:5000/api/emotions/${AuthStatus.userId}/statistics/theMostCommonReason`);
          const reasonData = await reasonResponse.json();
          setTheMostCommonReason(reasonData.reason);
  
          const positiveResponse = await fetch(`http://localhost:5000/api/emotions/${AuthStatus.userId}/statistics/theCauseOfPositiveEmotions`);
          const positiveData = await positiveResponse.json();
          setReasonOfPositive(positiveData.reason);
  
          const negativeResponse = await fetch(`http://localhost:5000/api/emotions/${AuthStatus.userId}/statistics/theCauseOfNegativeEmotions`);
          const negativeData = await negativeResponse.json();
          setReasonOfNegative(negativeData.reason);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchStatistics();
    }, []);
  
    return (
      <div className="page">
        <div className="stat-grid">
        <div className="block-x2">
            <h5>Цього тижня ви найбільше відчували:</h5>
            <h4>{theMostCommonEmotion}</h4>
          </div>
          <div className="block-x1">
            <h5>Джерело позитиву:</h5>
            <h4>{reasonOfPositive}</h4>
          </div>
          <div className="block-x1">
            <h5>Джерело негативу:</h5>
            <h4>{reasonOfNegative}</h4>
          </div>

          <div className="block-x2">
            <h5>Цього тижня головним джерелом емоцій було:</h5>
             <h4>{theMostCommonReason}</h4>
          </div>
        </div>
      </div>
    );
  }

export default StatisticPage;