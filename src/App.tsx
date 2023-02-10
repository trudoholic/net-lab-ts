import { useState, useEffect } from 'react'
import './App.css'
import { IUnit, getUnits, logError } from './api'

import TableHeader from "./components/TableHeader"
import TableRow from "./components/TableRow"
import TableFooter from "./components/TableFooter";

function App() {
    const [units, setUnits] = useState<IUnit[]>([])
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const data = await getUnits(abortController.signal)
                console.log(data)
                setIsError(false)
                setUnits(data)
            } catch (error) {
                logError(error)
                setIsError(true)
            }
        })()

        return () => abortController.abort()
    }, [])

    return (
        <div className="App">
            <TableHeader units={units} setUnits={setUnits} />
            {isError ? (
                <div>Error getting data!</div>
            ) : (
                units.map(item => <TableRow key={item.id} {...item} />)
            )}
            <TableFooter total={units.length}/>
        </div>
    )
}

export default App
