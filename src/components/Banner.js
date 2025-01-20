import React, { useState } from "react";

const Banner = () => {
  const [visible, setVisible] = useState(true);
  
  const orangeBtn = () => {
    alert(`10% 할인 쿠폰에 당첨 되었습니다.`)
  }
  const closeBtn = (e) => {
    e.stopPropagation();
    setVisible(false); // 비동기
  }

  return visible ? (
    <div onClick={orangeBtn}
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBtn}>닫기</button>
    </div>
  ) : null;
};

export default Banner;
