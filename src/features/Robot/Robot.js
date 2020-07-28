import React, { useState } from 'react';
import { on, off, reset, command } from './RobotApi';

const Robot = (props) => {
    let cordinates = {x: 0, y: 0};
    const func = (x, y, crashed) => {
        console.log(`callback ${x} ${y} ${crashed}`);
        if(crashed) {
            cordinates = {
                x, y
            };
        }
    };
    command(100, 20);
    const { width, height } = on(func);
    console.log(on(func));
    return (
        <div className={`robot`}>
            <h5>Robot</h5>
            <div className={`pen`} style={{ width, height}}>
                <span className={`robot`} style={{ width: cordinates.x, height: cordinates.y }}>&nbsp;</span>
            </div>

        </div>
    )
};
export default Robot;