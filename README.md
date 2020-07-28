# Stop That Robot!

This challenge is to create a React frontend interface for a little 2D robot. This robot accepts a speed and direction command, and runs around its pen until it crashes into a wall.

The pen is always rectangular, but its dimensions change every time the robot is reset. The size of each dimension of the pen is between 200 and 1000, which are unitless. The center of the pen is coordinates (0, 0), and +x is to the right, and +y is up on the screen. The robot is a point, and crashes when the center hits a wall. There are no other obstacles.

The speed of the robot is in pen-units (ie, the units the pen dimensions are in) per second. The direction is an angle in radians, with 0 in the +x direction, and increasing counter-clockwise.

The entire robot and API lives in `RobotApi.js`, which uses ES6 modules and starts as soon as it is imported.

## Provided

- `RobotApi.js` - The JavaScript library that simulates the robot. Do not modify this file. API documentation is below.

## Requirements

- Solution is in React
- Solution has two views, which you can decide how to organize:
  - Control View
    - Displays robot
    - Provides control of the robot
    - Lets user recover when robot crashes
  - Stats View
    - Displays the raw robot data
    - Displays time since last crash

## Deliverables

Please send a zip with the following:

- Full code
- README containing:
  - instructions on building and running
  - Approximately how long you spent on the challenge
  - Any additional notes

## Evaluation Criteria

Besides meeting the above requirements, we will evaluate your solution on the following criteria:

- How the solution functions, including handling any edge cases
- The choice and implementation of the interface interactions. Note that the visual design is **NOT** part of the criteria.
- How the solution is architected and design choices
- Code readability

## RobotApi Reference

---

### `RobotApi.on(listener: function)`

Registers a listener to receive robot status updates.

#### Parameters

##### `listener`: `function(x: number, y: number, crashed: boolean)`

The callback to register for robot status updates. Called periodically with the x and y positions and whether the robot has crashed.

#### Returns: `object(width: number, height: number)`

The dimensions of the current pen.

---

### `RobotApi.off(listener: function)`

Unregisters a listener from the robot status updates.

#### Parameters

##### `listener`: `function(x: number, y: number, crashed: boolean)`

The listener to remove.

#### Returns: None

---

### `RobotApi.command(speed, direction)`

Sends a velocity command to the robot.

#### Parameters

##### `speed`: `number`

The commanded speed for the robot, in pen-units (ie, the units the pen dimensions are in) per second.

##### `direction`: `number`

The commanded angle of motion for the robot, in radians. 0 is in the +x direction and it increases counter-clockwise.

#### Returns: None

---

### `RobotApi.reset()`

#### Parameters

None

#### Returns: `object(width: number, height: number)`

The dimensions of the new pen.

---
