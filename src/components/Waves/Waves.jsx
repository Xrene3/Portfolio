import React, { useState } from 'react';
import Wave from 'react-wavify'
import './Waves.css'
import Bottle from '../Bottle/Bottle.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
function Wavify() {
    const [isPaused, setWave] = useState(false);

    return (
        <>

            <div className="waveContainer">

                <Wave
                    className="wave"
                    fill='#B589D6'
                    paused={isPaused}
                    style={{ display: 'flex' }}
                    options={{
                        height: 10,
                        amplitude: 25,
                        speed: 0.15,
                        points: 3
                    }}
                />

                <Wave
                    className="wave"
                    fill='#9969C7'
                    paused={isPaused}
                    style={{ display: '' }}
                    options={{
                        height: 40,
                        amplitude: 20,
                        speed: 0.25,
                        points: 4
                    }}
                />

                <Wave
                    className="wave"
                    fill='#804FB3'
                    paused={isPaused}
                    style={{ display: '' }}
                    options={{
                        height: 70,
                        amplitude: 30,
                        speed: 0.2,
                        points: 5
                    }}
                />
                {/* <p className="bottom-0 absolute w-full text-center secretMessage text-white italic font-bold">Deputa</p> */}

                <div className=" absolute w-full text-center secretArea">
                    <button class=" px-3 py-3 text-white text-italic" onClick={() => setWave(prev => !prev)}>
                        {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                    </button>
                </div>

            </div>
        </>
    )
}

export default Wavify;