// const WorkoutItems = [
//     {
//         type: 'S0',
//         name: '숨쉬기',
//         icon: '../assets/icon_ring.svg'
//     },
//     {
//         type: 'S1',
//         name: '양손 들기',
//         icon: '../assets/icon_slope.svg'
//     },
//     {
//         type: 'S2',
//         name: '가슴 펴기',
//         icon: '../assets/icon_wing.svg'
//     },
// ];

const RecentWorkoutComponent = (props) => {
    const getName = (type) => {
        switch(type) {
            case 'S0':
                return '숨쉬기';
            case 'S1':
                return '양손 들기';
            case 'S2':
                return '가슴 펴기';
        }
    }
    const getIcon = (type) => {
        switch(type) {
            case 'S0':
                return './assets/icon_ring.svg';
            case 'S1':
                return './assets/icon_slope.svg';
            case 'S2':
                return './assets/icon_wing.svg';
        }
    }
    const { type, count } = props.item;
    const name = getName(type);
    const icon = getIcon(type);

    const isFirst = props.index === 0;
    // console.log(props, type, name, icon, count);
    const date = new Date();
    const prev = new Date();
    prev.setHours(prev.getHours() -2);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const max = date.getTime();
    const min = prev.getTime();
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
    const list = (props && props.list) || [];
    const s0 = [];
    const s1 = [];
    const s2 = [];

    const now = new Date();
    const recentBase = new Date();
    recentBase.setHours(now.getHours() -2);
    const recentMS = recentBase.getTime();
    list.forEach(item => {
        const time = item.data.time;
        switch(item.data.type) {
            case 'S0':
                item.time && item.time >= recentMS && s0.push(item);
                break;
            case 'S1':
                item.time && item.time >= recentMS && s1.push(item);
                break;
            case 'S2':
                item.time && item.time >= recentMS && s2.push(item);
                break;
        } 
    });
    
    const items = [
        {
            count: s0.length,
            type: 'S0',
            raw: s0
        },
        {
            count: s1.length,
            type: 'S1',
            raw: s1
        },
        {
            count: s2.length,
            type: 'S2',
            raw: s2
        }
    ];
    const workoutElem = items.map((item, index) => {
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
