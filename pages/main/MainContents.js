import { useState } from "react";
import RecentContents from "./RecentContents";
import DetailContents from "./DetailContents";

const MainContents = ()=> {
    const [selectedTab, setSelectTab] = useState(0); 
    console.log(selectedTab);
    return (
        <>
            <div className="contents-tab">
                <div className={`tab-item ${selectedTab === 0 ? 'selected' : ''}`} onClick={() => setSelectTab(0)}>
                    최근 운동 기록
                </div>
                <div className={`tab-item ${selectedTab === 1 ? 'selected' : ''}`} onClick={() => setSelectTab(1)}>
                    자세한 기록
                </div>
            </div>
            <div className="contents-container">
                {(selectedTab === 0) && <RecentContents />}
                {(selectedTab === 1) && <DetailContents />}
            </div>
            <style jsx>{`
                .contents-tab {
                    height: 46px;
                    padding: 2px 2px 2px 2px;
                    border-radius: 64px;
                    background-color: #f4f4f4;
                    margin-top: 13px;
                    margin-left: 30px;
                    margin-right: 30px;
                    display: flex;
                    margin-bottom: 27px;
                }
                .contents-tab .tab-item {
                    flex: 1;
                    display: flex;
                    text-align: center;
                    item-align: center;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 16px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                }
                .contents-tab .tab-item.selected {
                    background: white;
                    border-radius: 64px;
                    background-color: #ffffff;
                }
                .contents-container {
                    margin-left: 12px;
                    margin-right: 12px;
                }
            `}</style>
        </>
    );
}

export default MainContents;