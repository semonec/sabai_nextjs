import axios from 'axios';
import { useEffect, useState } from "react";
import MainHeader from "./main/MainHeader";
import MainTimeline from "./main/MainTimeline";
import MainContents from "./main/MainContents";

const Main = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(`/api/get`)
            .then((response) => {
                setList(response.data);
            })
    }, []);
    return (
        <div>
            <div className="main-container">
                <MainHeader />
                <MainTimeline list={list}/>
                <MainContents list={list}/>
            </div>
            <style jsx>{`
                .main-container {
                    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
                    display: flex;
                    flex-direction: column;
                    margin-left: 18px;
                    margin-right: 18px;
                    flex-direction: column;
                    height: 100vh;
                    margin-bottom: 40px;
                }
            `}</style>
        </div>
    );
}

export default Main;

