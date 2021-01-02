const WorkoutItems = [
    {
        type: 'S0',
        name: '숨쉬기',
        icon: '../assets/icon_ring.svg'
    },
    {
        type: 'S1',
        name: '양손 들기',
        icon: '../assets/icon_slope.svg'
    },
    {
        type: 'S2',
        name: '가슴 펴기',
        icon: '../assets/icon_wing.svg'
    },
];

const RecentWorkoutComponent = (props) => {
    const { type, name, icon } = props.item;
    const isFirst = props.index === 0;
    const count = 20; // TODO: get from DB.
    const track = [
        {time: 6},
        {time: 12},
    ]
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return (
        <div className={`recent-workout-container ${isFirst? 'isFirst': ''}`}>
            <div className="title-container">
                <div>{name}</div>
                <img src={icon} className="icon" />
            </div>
            <div className="n-times-container">
                <div className="counter">{count}</div>
                <div className="postfix">회</div>
            </div>
            <div className="recent-timeline">
            </div>
            <div className="recent-timeline-desc">
                <div>{Math.max(hour-2,0)}:{minute}</div>
                <div>{hour}:{minute}</div>
            </div>
            <style jsx>{`
                .recent-workout-container {
                    min-width: 171px;
                    width: 50%;
                    height: 160px;
                    margin: 0 8px 24px 30px;
                    padding: 16px 6px 11px 7px;
                    background-color: #d5d5d5;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                }
                .recent-workout-container.isFirst {
                    background-color: #f5df4d;
                }
                .title-container {
                    margin-left: 15px;
                    margin-right: 15px;
                    font-size: 16px;
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                }
                .title-container img{
                    width: 20px;
                    height: 20px;
                }
                .n-times-container {
                    margin-top: 24px;
                    font-size: 40px;
                    text-align: center;
                }
                .n-times-container div{
                    display: inline-block;
                }
                .n-times-container .counter {
                    font-size: 40px;
                }
                .n-times-container .postfix {
                    font-size: 24px;
                }
                .recent-timeline {
                    margin-left: 8px;
                    margin-right: 8px;
                    margin-top: 25px;
                    height: 16px;
                    border-radius: 64px;
                    background-color: #f0eee9;
                    position: relative;
                }
                .recent-timeline-desc {
                    display: flex;
                    justify-content: space-between;
                    margin-left: 8px;
                    margin-right: 8px;
                    margin-top: 6px;
                    color: #333333;
                    font-size: 14px;

                }
            `}</style>
        </div>
    )
}
const RecentContents = (props)=> {
    const workoutElem = WorkoutItems.map((item, index) => {
        return <RecentWorkoutComponent key={`workout-component-${index}`} item={item} index={index}/>;
    });
    return (
        <>
            <div className="workout-list-container">
                {workoutElem}
            </div>
            <div className="my-workout-list">
                <div className="title">
                    <div className="my-history">내 운동기록</div>
                    <div className="detail" onClick={() => props.goDetail()}>자세히 보기</div>
                </div>
                <div className="list-area">
                    <div>싸바이 서비스와 함께<br></br>운동 기록을 시작하세요!</div>
                </div>
            </div>
            <style jsx>{`
                .workout-list-container {
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: auto;
                }
                .my-workout-list {
                    display: flex;
                    flex-direction: column;
                }
                .my-workout-list .title {
                    display: flex;
                    justify-content: space-between;
                }
                .my-workout-list .title .my-history {
                    font-size: 20px;
                    font-weight: bold;

                }
                .my-workout-list .title .detail {
                    color: #333333;
                    font-size: 14px;
                }
                .my-workout-list .list-area {
                    height: 177px;
                    background-color: #fafafa;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}

export default RecentContents;
