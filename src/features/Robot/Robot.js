import React from 'react';
import moment from 'moment';
import { on, reset, command } from './RobotApi';

class Robot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c: { x: 0, y: 0 },
            d: { width: 0, height: 0 },
            speed: 100,
            direction: 1,
            stats: [],
        }
    }
    componentDidMount() {
        const func = (x, y, crashed) => {
            const stats = this.state.stats;
            if(!crashed) {
                console.log(`callback ${x} ${y} ${crashed} ... `);
                if(this.state.c.x !== x && this.state.c.y !== y) {
                    this.setState({ ...this.state,
                        c: {x, y},
                        stats: [ ...stats, {x, y, t: 'move', d: moment().valueOf()}],
                    }, () => this.scrollToBottom() );
                }
            } else {
                this.setState({ ...this.state,
                    stats: [ ...stats, {x, y, t: 'crash', d: moment().valueOf()}],
                }, () => this.scrollToBottom() );
            }
        };
        const { width, height } = on(func);
        this.setState({ ...this.state,
            d: {width, height}
        }, () => {});
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }
    reset = () => {
        const { width, height } = reset();
        this.setState({
            ...this.state,
            d: { width, height},
            c: {x: 0, y:0},
        })
        ;
    };
    render = () => {
        const d = { ...this.state.d };
        const c = { ...this.state.c };
        const speed = this.state.speed;
        const direction = this.state.direction;
        const stats = this.state.stats;
        return (
            <div className={`robot`}>
                <div className={`map`}>
                    <h5>Robot</h5>

                    <label>Speed: </label>
                    <input onChange={(e) => this.setState({ ...this.state, speed: e.target.value })} type={`number`} value={ speed } />

                    <label>Direction: </label><input onChange={(e) => this.setState({ ...this.state, direction: e.target.value })} type={`number`} value={ direction }  />
                    <button onClick={()=> command(this.state.speed, this.state.direction)}>Animate</button>

                    <br/>
                    <button onClick={ this.reset }>Reset</button>
                    <p>&nbsp;</p>
                    <div className={`pen`} style={{ width: d.width, height: d.height}}>
                        <span className={`robot`} style={{ top: c.y, left: c.x, marginTop: d.height / 2, marginLeft: d.width / 2 }}>&nbsp;</span>
                    </div>
                </div>
                <div className={`stats`}  ref={el => { this.el = el; }}>
                    {
                        stats.map(s => <div className={`stat`}>
                                <span>
                                    <b>{` ${moment(s.d).format('YYYY/MM/DD hh:mm:ss A')} `} </b>
                                    { s.t === 'move' ?
                                        `Robot moved to cordinate ${Math.ceil(s.x)} ${Math.ceil(s.y)}` :
                                        `Robot crashed!`
                                    }
                                </span>
                        </div> )
                    }
                </div>

            </div>
        )
    }
}
export default Robot;