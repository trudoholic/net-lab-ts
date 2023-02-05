import { IUnit } from '../api'

function TableRow(props: IUnit) {
    function imgSrc (t: string) {
        return `https://via.placeholder.com/512/336699?text=` + t
    }

    return (
        <>
            <details key={props.id}>
                <summary><b>{props.title}</b></summary>
                <p>{props.body}</p>
                <img src={imgSrc(props.title)} alt={props.title} />
            </details>
        </>
    );
}

export default TableRow