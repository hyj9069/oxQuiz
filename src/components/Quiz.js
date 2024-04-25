import React from 'react';
import { useState } from 'react';

const questionData = [
  {question : '달팽이는 이빨이 있다' , answer : 'O'},
  {question : '종이로 만든 솥으로 계란을 삶을 수 있다' , answer : 'O'},
  {question : '비행기의 출발 시간은 탑승 문이 완전히 닫히는 시간이다' , answer : 'X'},
  {question : '손톱은 뼈가 아니고 피부가 변해서 된 것이다' , answer : 'O'},
]
function Quiz() {
  const [question, setQuestion] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleCLick = (answer) => {
    let next = question + 1;
    if(next < questionData.length) {
      setQuestion(next)
      }else setResult(true);

    if(questionData[question].answer === answer){
      alert('정답입니다');
      setScore(score + 1)
    }else alert('오답입니다')
  }
  const reset = () => {
    setQuestion(0);
    setResult(false);
    setScore(0);
  }

  return (
    <div>
      {result ? (
        <div className='result'> 
          <p>맞춘 문항 수: {score}</p>
          <p>총 문항 수: {questionData.length}</p>
          <button onClick={reset}>다시하기</button>
        </div>
      ) : (
        <>
          <div className='questionbox'>
            <div className='questionwrap'>
              <span style={{marginRight:'10px',fontSize:'25px'}}>Q.</span>
              <p style={{fontSize:'17px'}}>{questionData[question].question}</p>
            </div>
          </div>
          <div className='btnbox'>
            <button onClick={() => handleCLick('O')} value='O'>O</button>
            <button onClick={() => handleCLick('X')} value='X'>X</button>
          </div>
        </>
      )}




    </div>
  );
}

export default Quiz;