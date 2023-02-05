import {useState} from "react"
import { IUnit } from '../api'

function TableRow(props: IUnit) {
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false)
    const [done, toggle] = useState<boolean>(false)

    const handleClick = () => {
        setDetailsVisible(prevState => !prevState)
    }

    function imgSrc (t: string) {
        return `https://via.placeholder.com/512/336699?text=` + t
    }

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={(e) => toggle(prevState => !prevState)}
                />
                <div onClick={handleClick}>
                    <b>{props.title}</b>
                </div>
            </div>
            {detailsVisible ? (
                <div>
                    <p>{props.body}</p>
                    <img src={imgSrc(props.title)} alt={props.title} />
                </div>
            ) : null}
        </>
    )
}

export default TableRow