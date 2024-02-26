import { useState } from 'react';
import './Countdown.css'


function Countdown() {

    const [target, setTarget] = useState(null)

    return (
        <>
            <h1>Countdown timer app </h1>
            <div id="input">
                <input type='datetime-local' id="datetime" />
                <button id="submit">Start</button>
            </div>
        </>
    )

}

export default Countdown;