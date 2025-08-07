import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify'
import './Waves.css'
import Bottle from '../Bottle/Bottle.jsx'
function Wavify({ waveMultiplier, isWaving, setWave }) {
    useEffect(() => {
        const localWaveStatus = localStorage.getItem('waveStatus');
        if (localWaveStatus === 'active') {
            setWave(true);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('waveStatus', isWaving ? 'active' : 'inactive');
    }, [isWaving])
    return (
        <>

            <div className="waveContainer z-0">
                <Wave
                    className="wave"
                    fill='#9DECE6'
                    paused={isWaving}
                    style={{ display: 'flex' }}
                    options={{
                        height: 10,
                        amplitude: 25,
                        speed: 0.15 * waveMultiplier,
                        points: 3
                    }}
                />

                <Wave
                    className="wave"
                    fill='#4BC7CE'
                    paused={isWaving}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 27,
                        speed: 0.15 * waveMultiplier,
                        points: 3
                    }}
                />

                <Wave
                    className="wave"
                    fill='#006995'
                    paused={isWaving}
                    style={{ display: '' }}
                    options={{
                        height: 70,
                        amplitude: 20,
                        speed: 0.25 * waveMultiplier,
                        points: 4
                    }}
                />

                <Wave
                    className="wave"
                    fill='#1F4168'
                    paused={isWaving}
                    style={{ display: '' }}
                    options={{
                        height: 120,
                        amplitude: 30,
                        speed: 0.2 * waveMultiplier,
                        points: 5
                    }}
                />
                {/* <p className="bottom-0 absolute w-full text-center secretMessage text-white italic font-bold">Deputa</p> */}
            </div>
        </>
    )
}

export default Wavify;