import * as React from "react";

export const StartButton = () => {
  return (
    <div className="start-button">
      <div>우리동네 운동기록 보기</div>
      <style jsx>{`
        .start-button {
            width: 100%;
            border-radius: 12px;
            background-color: #00589b;
            color: white;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: center;
          }
      `}
      </style>
    </div>
  );
};
