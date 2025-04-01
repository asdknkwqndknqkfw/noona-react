import { useState } from 'react'
import './App.css'
import Box from './component/Box'

const choice = {
  rock: {
    name: 'rock',
    img: 'https://m.media-amazon.com/images/I/61W8BVTF10L.jpg'
  },
  scissors: {
    name: 'scissors',
    img: 'https://www.artnews.com/wp-content/uploads/2022/07/AdobeStock_507713455.jpeg?w=1800'
  },
  paper: {
    name: 'paper',
    img: 'https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/white-card/.jpg'
  }
}

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼 존재
// 3. 버튼 클릭시, 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3, 4의 결과를 가지고 승패 따짐
// 6. 5 결과에 따라 테두리 색 바뀜 (이기면-초록, 지면-빨강, 비기면-검정)

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [compSelect, setCompSelect] = useState(null)
  const [result, setResult] = useState(['TIE', 'TIE'])

  const randomChoice = () => {
    const keys = Object.keys(choice);
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; // 랜덤 키 선택
    return choice[randomKey];
  }

  const play = (userChoice) => {
    const uChoice = choice[userChoice];
    setUserSelect(uChoice);
 
    const computerChoice = randomChoice();
    setCompSelect(computerChoice);
    
    if (uChoice === computerChoice) {
      setResult(['TIE', 'TIE']);
    }
    else if (
      (uChoice === choice.rock && computerChoice === choice.scissors) ||
      (uChoice === choice.scissors && computerChoice === choice.paper) ||
      (uChoice === choice.paper && computerChoice === choice.rock)
    ) {
      setResult(['WIN', 'LOSE']);
    }
    else {
      setResult(['LOSE', 'WIN']);
    }
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} gameResult={result[0]} />
        <Box title="Computer" item={compSelect} gameResult={result[1]} />
      </div>
      <div className='main'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  )
}

export default App
