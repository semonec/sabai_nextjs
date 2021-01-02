import { WorkoutItems } from '../common/data';

const RecentWorkoutComponent = (props) => {
    const { type, name, icon } = props.item;
    const isFirst = props.index === 0;
    return (
        <div className={`recent-workout-container ${isFirst? 'isFirst': ''}`}>
            <div className="title-container">
                <div>{name}</div>
            </div>
            <style jsx>{`
                .recent-workout-container {
                    min-width: 171px;
                    width: 50%;
                    height: 257px;
                    margin: 27px 8px 24px 30px;
                    padding: 16px 6px 11px 7px;
                    background-color: #d5d5d5;
                    border-radius: 5px;
                }
                .recent-workout-container.isFirst {
                    background-color: #f5df4d;
                }
                .title-container {
                    margin-left: 15px;
                    margin-right: 15px;
                    font-size: 16px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}
const RecentContents = ()=> {
    const workoutElem = WorkoutItems.map((item, index) => {
        return <RecentWorkoutComponent key={`workout-component-${index}`} item={item} index={index}/>;
    });
    return (
        <>
            <div className="workout-list-container">
                {workoutElem}
            </div>
            <style jsx>{`
                .workout-list-container {
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: auto;
                }
            `}</style>
        </>
    );
}

export default RecentContents;
