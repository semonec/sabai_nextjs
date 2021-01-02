
const TimeTick = (props) => {
    return (
        <div className="time-tick">
            <style jsx>{`
                .time-tick {
                    width: 6px;
                    height: 4px;
                    border-radius: 64px;
                    background-color: #f5df4d;
                    position: absolute;
                    left: ${props.left}%
                }
            `}</style>
        </div>
    )
}
const MainTimeline = () => {
    const track = [
        {time: 6},
        {time: 12},
    ]
    return (
        <>
            <div className="timeline-container">
                {track.map((item, index) => {
                    const left = item.time/24 * 100;
                    return <TimeTick key={`ticker-${index}`}left={left} index={index}/>
                })}
            </div>
            <div className="timeline-timedesc">
                <div></div>
                <div>6:00</div>
                <div>12:00</div>
                <div>18:00</div>
                <div></div>
            </div>
            <style jsx>{`
                .timeline-container {
                    margin-top: 17px;
                    height: 4px;
                    width: 100%;
                    opacity: 0.43;
                    border-radius: 32px;
                    background-image: linear-gradient(to left, #f0eee9, #f0eee9);
                    position: relative;
                }
                .timeline-timedesc {
                    margin-top: 
                    width: 100%;
                    display: flex;
                    justify-content: space-between; 
                }
                .timeline-timedesc  div {
                    color: #939597;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    width: 30px;
                    text-align: center
                }
            `}</style>
        </>
    );
}

export default MainTimeline;