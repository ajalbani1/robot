import React from 'react';
import { on, off, reset, command } from './RobotApi';

const Robot = (props) => {
    const func = (x, y, crashed) => {
        console.log(`callback ${x} ${y} ${crashed}`);
    };
    console.log(on(func));
    return (
        <div className={`robot`}>
            <h5>Robot</h5>
        </div>
    )
};
export default Robot;