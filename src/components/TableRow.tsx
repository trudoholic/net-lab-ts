import {useState} from "react"
import { IUnit } from '../api'
import Box  from "@mui/material/Box"
import Checkbox  from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography";

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
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
            }}>
                <Checkbox
                    checked={done}
                    onChange={(e) => toggle(prevState => !prevState)}
                    sx={{color: "lightcyan"}}
                />

                <Typography
                    onClick={handleClick}
                    color={done ? "primary.light" : "common.white"}
                    variant="body1"
                >
                    {props.title}
                </Typography>
            </Box>
            {detailsVisible ? (
                <div>
                    <Typography
                        variant="body2"
                        sx={{p: 1}}
                    >
                        {props.body}
                    </Typography>

                    <img src={imgSrc(props.title)} alt={props.title} />
                </div>
            ) : null}
        </>
    )
}

export default TableRow