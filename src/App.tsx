import { useState, useEffect } from 'react'
import './App.css'
import { IUnit, getUnits } from './api'
import { AxiosError } from "axios"

function App() {
    const [units, setUnits] = useState<IUnit[]>([])
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                const data = await getUnits()
                console.log(data)
                setUnits(data)
            } catch (error) {
                const err = error as AxiosError
                console.log(err.message)
                setIsError(true)
            }
        })()
    }, [])

    const handleClick = async () => {}

    return (
        <div className="App">
            <button onClick={handleClick}>Add Unit</button>
            <div>
                {isError ? (
                    <div>Error getting data!</div>
                ) : (
                    units.map(item => (
                        <details key={item.id}>
                            <summary><b>{item.title}</b></summary>
                            <p>{item.body}</p>
                        </details>
                    ))
                )}
            </div>
        </div>
    )
}

export default App
