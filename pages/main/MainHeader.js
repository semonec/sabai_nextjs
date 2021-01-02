import { useEffect, useState } from "react";


const MainHeader = () => {
    const date = new Date(); 
    const year = date.getFullYear(); 
    const month = new String(date.getMonth()+1); 
    const day = new String(date.getDate()); 
    const [address, setAddress] = useState('경기도 성남시 분당구청');

    const showPosition = (position) => {
        let geocoder = new kakao.maps.services.Geocoder();
        // geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
        geocoder.coord2RegionCode(position.coords.latitude, position.coords.longitude, (result, status)=> {
            if (status === kakao.maps.services.Status.OK) {
                setAddress(result[0].address_name);
            }
        });

    }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          }
    }, []);
    return (
        <div className="main-header-container">
            <div className="main-header-title">싸바이 서비스 - {address}</div>
            <div className="main-header-slot">
                <div>{year}년 {month}월 {day}일</div>
                <div className="login-container">        
                    <img className="icon-img" src="./assets/icon_my.svg" /> 
                    <div className="login">로그인</div>
                </div>
            </div>
            <style jsx>{`
                .main-header-container {
                    display: flex;
                    flex-direction: column;
                }
                .main-header-title {
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                    margin-top: 82px;
                }
                .main-header-slot {
                    font-size: 28px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.46;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                    display: flex;
                    justify-content: space-between;

                }
                .main-header-slot .login-container {
                    display: flex;
                    align-items: center;
                }
                .icon-img {
                    margin-right: 4px;
                }
                .main-header-slot .login {
                    font-size: 16px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    letter-spacing: normal;
                    text-align: left;
                    color: #00589b;
                    display: flex;
                    align-items: center;
                    height: 16px;
                }
            `}</style>
        </div>
    )
}

export default MainHeader;