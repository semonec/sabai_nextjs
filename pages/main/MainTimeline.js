
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
        <div className="timeline-container">
            {track.map(item => {
                const left = item.time/24 * 100;
                return <TimeTick left={left}/>
            })}
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
            `}</style>
        </div>
    )
}

export default MainTimeline;