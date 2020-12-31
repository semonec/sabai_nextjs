import MainHeader from "./main/MainHeader";
import MainTimeline from "./main/MainTimeline";

const Main = () => {
    return (
        <div>
            <div className="main-container">
                <MainHeader />
                <MainTimeline />
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

