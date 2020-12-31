import * as React from "react";

const HeaderArea = () => {
  return (
    <div className="header-container">
      <div className="header-title">싸바이서비스</div>
      <div className="header-login">
        <img className="icon-img" src="./assets/icon_my.svg" /> 
        <div className="login">로그인</div>
      </div>
      <style jsx>{`
        .header-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 102px;
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
            letter-spacing: normal;
            text-align: left;
            color: #00589b;
            display: flex;
            align-items: center;
        }
        .icon-img {
          margin-right: 4px;
        }
        .header-login .login {
          height: 16px;
        }
      `}
      </style>
    </div>
  );
};

export default HeaderArea;