

import React, { Component, useState, useEffect  } from 'react'
import PropTypes from 'prop-types'
import SevenSegmentDisplay from 'react-seven-segment-display'


export default function Timer() {

    const [active, setActive] = useState(false);
    const [sec, setSec] = useState(0);
    const [sec_2, setSec_2] = useState(0);
    const [min, setMin] = useState(0);
    const [min_2, setMin_2] = useState(0);
    const [hrs, setHrs] = useState(0);
    const [hrs_2, setHrs_2] = useState(0);
    const [vitesse, setVitesse] = useState(50);

    useEffect(() => {
        if (active) {
            let s2 = 0
            let s = 1
            let m2 = 1
            let m = 1
            let h2 = 1
            let h = 1
            if (sec !== 0 || sec_2 !== 0 || min !== 0 || min_2 !== 0 || hrs !== 0 || hrs_2 !== 0) {
                s2 = sec_2
                sec === 0 ? s = 1 : s = sec
                min_2 === 0 ? m2 = 1 : m2 = min_2
                min === 0 ? m = 1 : m = min
                hrs_2 === 0 ? h2 = 1 : h2 = hrs_2
                hrs === 0 ? h = 1 : s2 = hrs
            }
            const timeout = setInterval(() => {
                if (s2 < 10) {
                    setSec_2(s2);
                    s2++
                } else {
                    s2 = 0
                    setSec_2(s2);
                    s2++
                    if (s < 6) {
                        setSec(s)
                        s++
                    } else {
                        s = 0
                        setSec(s)
                        s++
                        if (m2 < 10) {
                            setMin_2(m2)
                            m2++
                        } else {
                            m2 = 0
                            setMin_2(m2)
                            m2++
                            if (m < 6) {
                                setMin(m)
                                m++
                            } else {
                                m = 0
                                setMin(m)
                                m++
                                if (h2 < 10) {
                                    setHrs_2(h2)
                                    h2++
                                } else {
                                    h2 = 0
                                    setHrs_2(h2)
                                    if (h < 10) {
                                        setHrs(h)
                                        h++
                                    } else {
                                        s2 = 0
                                        s = 1
                                        m2 = 1
                                        m = 1
                                        h2 = 1
                                        h = 1
                                        setSec(0)
                                        setMin(0)
                                        setHrs(0)
                                        setSec_2(0)
                                        setMin_2(0)
                                        setHrs_2(0)
                                    }
                                }
                            }
                        }
                    }
                }
            }, vitesse);

            return () => clearInterval(timeout)
        }
    },[active, vitesse])

    return (
        <div>
            <SevenSegmentDisplay value={hrs}/>{" "}
            <SevenSegmentDisplay value={hrs_2}/>{" "}
            <span className="letters">H</span>

            <SevenSegmentDisplay value={min}/>{" "}
            <SevenSegmentDisplay value={min_2}/>{" "}
            <span className="letters">M</span>

            <SevenSegmentDisplay value={sec}/>{" "}
            <SevenSegmentDisplay value={sec_2}/>
            <span className="letters">S</span>

            <br/>
            <br/>
            <button type="button" onClick={() => setVitesse(1000)}> Ralentir </button>
            <button type="button" onClick={() => setActive(!active)}> {active ? "Stop" : "Go"} </button>
            <button type="button" onClick={() => setVitesse(50)}> Accelerer </button>
        </div>
    )

}
