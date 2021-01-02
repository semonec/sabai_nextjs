
// const currentItemList = [
//     {
//         type: 'S0',
//         time: 1609587322276
//     },
//     {
//         type: 'S0',
//         time: 1609587322276
//     },
//     {
//         type: 'S0',
//         time: 1609587322276
//     }
// ]

const filterCurrentList = (items) => {
    const now = new Date();
    const recentBase = new Date();
    recentBase.setHours(now.getHours() -2);
    const recentMS = recentBase.getTime();
    // console.log(now, recentBase.getTime());
    return items.filter((item)=> { return item.time >= recentMS; })
}

const filterPreviousList = (items) => {
    const now = new Date();
    const recentBase = new Date();
    recentBase.setHours(now.getHours() -2);
    const recentMS = recentBase.getTime();
    // console.log(now, recentBase.getTime());
    return items.filter((item)=> { return item.time < recentMS; })
}

const DetailWorkoutItem = (props) => {
    filterCurrentList([]);
    const typeConverter = (type) => {
        switch(type) {
            case 'S0':
                return '숨쉬기';
            case 'S1':
                return '양손 들기';
            case 'S2':
                return '가슴 펴기';
        }
    }
    console.log(props.data.type); 
    const timeConverter = (type, isPrevious = false) => {
        const date = new Date(type);
        return !isPrevious
            ?`${date.getHours()}:${date.getMinutes()}`
            :`${date.getFullYear()}년 ${date.getMonth()+1}월${date.getDate()}일  ${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <>
            <div className={`detail-item-container ${props.isPrevious ? 'previous': ''}`}>
                <div>{typeConverter(props.data.type)}</div>
                <div>{timeConverter(props.time, props.isPrevious)}</div>
            </div>
            <style jsx>{`
                .detail-item-container {
                    width: 100%;
                    height: 68px;
                    font-size: 16px;
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                    background-color: #f5df4d;
                    align-items: center;
                    margin-bottom: 7px;
                    border-radius: 6px;
                }
                .detail-item-container.previous {
                    background-color: #d5d5d5;
                    font-weight: normal;
                    font-size: 14px;
                    height: 60px;
                }
                .detail-item-container div {
                    margin-left: 15px;
                    margin-right: 15px;
                }
            `}</style>
        </>
    )
}
const DetailContents = (props)=> {
    const { list }= props;
    console.log(list);

    const currentItemList = filterCurrentList(list);
    const prevItemList = filterPreviousList(list);

    return (
        <>
            <div className='detail-container'>
                <div className="current-title">최근 운동 감지됨 {currentItemList.length > 0 ? `(${currentItemList.length} 회)` : '없음'}</div>
                <div className="current-list">
                    {currentItemList.map((item, index) => {
                        return <DetailWorkoutItem key={`detail-current-workout-${index}`} {...item} isPrevious={false}/>
                    })}
                </div>
                <div className="previous-title">지난 운동 기록 {prevItemList.length > 0 ? `(${prevItemList.length} 회)` : '없음'}</div>
                <div className="previous-list">
                    {prevItemList.map((item, index) => {
                        return <DetailWorkoutItem key={`detail-current-workout-${index}`}{...item} isPrevious={true}/>
                    })}
                </div>
            </div>
            <style jsx>{`
                .detail-container {
                    display: flex;
                    flex-direction: column;
                }
                .detail-container .current-title,
                .detail-container .previous-title {
                    font-size: 20px;
                    font-weight: bold;
                }
                .detail-container .previous-title {
                    margin-top: 26px;
                }
                .detail-container .current-list,
                .detail-container .previous-list {

                    height: 150px;
                    overflow-y: auto;
                    margin-top: 8px;
                }
            `}</style>
        </>
    );
}

export default DetailContents;