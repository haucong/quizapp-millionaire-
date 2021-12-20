import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from '../Sound/src_sounds_play.mp3';
import correct from '../Sound/src_sounds_correct.mp3';
import wrong from '../Sound/src_sounds_wrong.mp3';

const Trivia = ({ data, setStop, setQuestionNumber, questionNumber }) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState(null)
  const [className, setClassName] = useState('answer');
  const [letPlay] = useSound(play);
  const [answerCorrect] = useSound(correct);
  const [ answerWrong] = useSound(wrong);


  useEffect(() =>{
    letPlay();
  },[letPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration)
  }

  const handleSelectedAnswer = (q) => {
    setSelectedAnswers(q)
    setClassName('answer active');
    // setTimeout(() => {
    //   setClassName(q.correct ? 'answer correct' : 'answer incorrect')
    // }, 3000)
    delay(3000, ()=> {
      setClassName(q.correct ? 'answer correct' : 'answer incorrect')
    })

    delay(3000,() => {
      if(q.correct){
        answerCorrect();
        delay(1000,()=>{
         setQuestionNumber((prev) => prev + 1)
         setSelectedAnswers(null);
         })
      }
      else{
        answerWrong();
        delay(1000,()=>{ 
          setStop(true);
        })
      }
    })

  }

  return (
    <div className='trivia'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((q) => (
          <div
            key={q.id}
            className={selectedAnswers === q ? className : 'answer'}
            onClick={() => handleSelectedAnswer(q)}
          >
            {q.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trivia
