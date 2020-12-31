import * as React from "react";
import HeaderArea from "./HeaderArea";
import HeaderDescription from "./HeaderDescription";
import StartButton from "./StartButton";

const Landing = () => {
  return (
    <div className="App">
      <div className="bg-placeholder">
        <HeaderArea />
        <HeaderDescription />
      </div>
      <StartButton />
      <div className="terms">
        싸바이 서비스는 운동 정보를 포함한<br></br>
        모든 개인 정보를 동의없이 수집하지 않습니다.
      </div>
      <div className="more">더 알아보기</div>
      <style jsx>{`
        .App {
            font-family: sans-serif;
            display: flex;
            margin-left: 18px;
            margin-right: 18px;
            flex-direction: column;
            height: 100vh;
            margin-bottom: 40px;
        }
        .bg-placeholder {
            background-image: url("./assets/background.svg");
            background-repeat: no-repeat;
            height: 531px;
            background-size: auto 100%;
        }
        .terms {
            color: #939597;
            width: 100%;
            text-align: center;
            margin-top: 25px;
        }
        .more {
            color: #939597;
            width: 100%;
            text-align: center;
            margin-top: 10px;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
        } 
      `}</style>
    </div>
  );
}

export default Landing;