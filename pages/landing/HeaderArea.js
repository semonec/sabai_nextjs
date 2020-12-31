import * as React from "react";

const HeaderArea = () => {
  return (
    <div className="header-container">
      <div className="header-title">싸바이서비스</div>
      <div className="header-login">
        <div>로그인</div>
      </div>
      <style jsx>{`
        .header-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 73px;
        }
        .header-container .header-title {
            font-size: 28px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.46;
            letter-spacing: normal;
            text-align: left;
            color: black;
        }
        .header-container .header-login {
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: left;
            color: #00589b;
        }
      `}
      </style>
    </div>
  );
};

export default HeaderArea;