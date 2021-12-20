import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';

function App() {

const data = [
  {
    id: 1,
    question: 'Rolex is a company that specializes in what type of product?',
    answers: [
      {
        text: 'Phone',
        correct: false,
      },
      {
        text: 'Watches',
        correct: true,
      },
      {
        text: 'Food',
        correct: false,
      },
      {
        text: 'Cosmetic',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'When did the website `Facebook` launch?',
    answers: [
      {
        text: '2004',
        correct: true,
      },
      {
        text: '2005',
        correct: false,
      },
      {
        text: '2006',
        correct: false,
      },
      {
        text: '2007',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Who played the character of harry potter in movie?',
    answers: [
      {
        text: 'Johnny Deep',
        correct: false,
      },
      {
        text: 'Leonardo Di Caprio',
        correct: false,
      },
      {
        text: 'Denzel Washington',
        correct: false,
      },
      {
        text: 'Daniel Red Cliff',
        correct: true,
      },
    ],
  },
];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '$ 100' },
        { id: 2, amount: '$ 200' },
        { id: 3, amount: '$ 300' },
        { id: 4, amount: '$ 500' },
        { id: 5, amount: '$ 1.000' },
        { id: 6, amount: '$ 2.000' },
        { id: 7, amount: '$ 4.000' },
        { id: 8, amount: '$ 8.000' },
        { id: 9, amount: '$ 16.000' },
        { id: 10, amount: '$ 32.000' },
        { id: 11, amount: '$ 64.000' },
        { id: 12, amount: '$ 125.000' },
        { id: 13, amount: '$ 250.000' },
        { id: 14, amount: '$ 500.000' },
        { id: 15, amount: '$ 1.000.000' },
      ].reverse(),
    []
  )
       
       const [questionNumber, setQuestionNumber] = useState(1);
       const [userName, setUserName] = useState(null)
       const [stop, setStop ] = useState(false);
       const[earned, setEarned] = useState('$ 0');

       useEffect(() => {
         questionNumber > 1 &&
           setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
           console.log(questionNumber);
       }, [setEarned,questionNumber])

       return (
         <div className='App'>
           {!userName ? (
             <Start setUserName={setUserName} />
           ) : (
             <>
               <div className='main'>
                 {stop ? (
                   <h1 className='earnedText'>You earned: {earned}</h1>
                 ) : (
                   <>
                     <div className='top'>
                       <div className='timer'>
                         <Timer
                           setStop={setStop}
                           questionNumber={questionNumber}
                         />
                       </div>
                     </div>
                     <div className='bottom'>
                       <Trivia
                         data={data}
                         setStop={setStop}
                         questionNumber={questionNumber}
                         setQuestionNumber={setQuestionNumber}
                       />
                     </div>
                   </>
                 )}
               </div>

               <div className='pyramid'>
                 <div className='help'>
                   <div>call relatives</div>
                   <div>50/50</div>
                   <div>consultation</div>
                 </div>
                 <ul className='monneyList'>
                   {moneyPyramid.map((monney) => (
                     <li
                       key={monney.id}
                       className={
                         questionNumber === monney.id
                           ? 'monneyItem active'
                           : 'monneyItem'
                       }
                     >
                       <span className='listItemNumber'>{monney.id}</span>
                       <span className='listItemAmount'>{monney.amount} </span>
                     </li>
                   ))}
                 </ul>
               </div>
             </>
           )}
         </div>
       )
}

export default App;
