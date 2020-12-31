import * as React from "react";

export const HeaderDescription = () => {
  return (
    <div className="header-description-container">
      <span>
        기록은 나중에 하고<br></br>운동하세요!
      </span>
      <style jsx>{`
        .header-description-container {
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: left;
            color: #939597;
            margin-top: 10px;
        }
      `}
      </style>
    </div>
  );
};
