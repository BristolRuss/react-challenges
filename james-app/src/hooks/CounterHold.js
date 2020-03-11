// import React, { useState } from 'react';

// export default ({initial, max}) => {
//     const [counter, setCounter] = useState(initial)
//     const [held, setHeld] = useState(0)
//     const [timer, setTimer] = useState(0)

//     const incrementCounter = () => setCounter (counter < max ? counter + 1 : counter)

//     const subtractCounter = () => setCounter (counter > 0 ? counter - 1 : counter)

//     const holdPlus = () => {
//         setTimer (Date.now())
//         setHeld(1)
//         while(held === 1) {
//             timer / 1000 % 500 === 0 ? counter + 1 : counter;
//         }
//     }

    

//     const releasePlus = () => {
//         setHeld(0)
//         setTimer (0)
//     }


//     return (
//         <>
//             <p>{counter}</p>
//             <div>
//                 <button id="plusButton" className = "btn btn-secondary" onMouseDown = {holdPlus} onMouseUp ={releasePlus}>+</button>
//                 <button className = "btn btn-secondary" onClick = {subtractCounter}>-</button>
//             </div>
//         </>
//     )
//     // onClick = {incrementCounter}
// }