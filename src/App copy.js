import React, { useEffect, useState } from 'react';
import datas from './components/data/Cards.js'
import BusinessCard from './components/BusinessCard.js';

// 추첨하기 버튼과 명함 컴포넌트를 구현
const App = () => {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  function draw() {
    // 조건 추가
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return acc = acc.concat(`${cur.name}, `);
      }, '');
      return alert(`3명의 추첨을 완료했습니다. 당첨자는 ${names} 입니다.`);
    }


    // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber));
    // 당첨자(array) 관리
    setPickedCards([...pickedCards, randomItem]);

  }

  useEffect(() => {
    // 보통 api호출 코드 작성, 그냥 초기화만함
    setCards(datas);

  }, []);


  const result = pickedCards.map((pickedCard) => (
    <BusinessCard info={pickedCard} key={pickedCard.phoneNumber} />
  ));
  console.log('result: ', result);


  // 조건부 랜더링
  return (
    <div className='App'>
      {/* 데이터가 cards 배열길이보다 커야 버튼이 보임 */}
      {cards.length > 0 &&  <button onClick={draw}>추첨하기</button>}
                            {/* 마지막에 뽑은 사람 정보 */}

      {/* 컴포넌트 재활용 어려움
       {pickedCards.length > 0 && (
        <BusinessCard info={pickedCards[pickedCards.length - 1]} />
        )} */}

       {/* 컴포넌트 map으로 반복
        {pickedCards.length > 0 &&
         pickedCards.map((pickedCard) => <BusinessCard info={pickedCard} /> )} */}

      {/* 컴포넌트 result 변수로 만들어서 재사용성 높임  */}
      { pickedCards.length > 0 && result }

    </div>

  );

}

export default App;
