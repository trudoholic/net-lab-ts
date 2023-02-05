import {useState} from "react"
import { IUnit } from '../api'

function TableRow(props: IUnit) {
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false)

    const handleClick = () => {
        setDetailsVisible(prevState => !prevState)
    }

    function imgSrc (t: string) {
        return `https://via.placeholder.com/512/336699?text=` + t
    }

    return (
        <div onClick={handleClick}>
            <b>{props.title}</b>

            {detailsVisible ? (
                <div>
                    <p>{props.body}</p>
                    <img src={imgSrc(props.title)} alt={props.title} />
                </div>
            ) : null}
        </div>
    )
}

export default TableRow