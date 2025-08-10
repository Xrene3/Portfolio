import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify'
import './Waves.css'
import Bottle from '../Bottle/Bottle.jsx'
function Wavify({ isWaving, setWave, theme }) {
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
            <div className="waveContainer dark:opacity-60 z-0 transiiton ease-linear duration-100">
                <Wave
                    className="wave z-1"
                    fill={theme == 'dark' ? '#c5baf5' : '#9DECE6'}
                    paused={isWaving}
                    style={{ display: 'flex' }}
                    options={{
                        height: 10,
                        amplitude: 25,
                        speed: 0.15,
                        points: 3
                    }}
                />
                <Wave
                    className="wave z-2"
                    fill={theme == 'dark' ? '#a473e6' : '#4BC7CE'}
                    paused={isWaving}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 25,
                        speed: 0.15,
                        points: 3
                    }}
                />

                <Wave
                    className="wave z-3"
                    fill={theme == 'dark' ? '#612097' : '#006995'}
                    paused={isWaving}
                    style={{ display: '' }}
                    options={{
                        height: 70,
                        amplitude: 20,
                        speed: 0.25,
                        points: 4
                    }}
                />

                <Wave
                    className="wave z-4"
                    fill={theme == 'dark' ? '#1b062bff' : '#1F4168'}
                    paused={isWaving}
                    style={{ display: '' }}
                    options={{
                        height: 120,
                        amplitude: 30,
                        speed: 0.2,
                        points: 5
                    }}
                />

                {/* <p className="bottom-0 absolute w-full text-center secretMessage text-white italic font-bold">Deputa</p> */}
            </div>
        </>
    )
}

export default Wavify;