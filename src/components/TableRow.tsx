import {useState} from "react"
import { IUnit } from '../api'
import Box  from "@mui/material/Box"
import Checkbox  from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TableRow(props: IUnit) {
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false)
    const [done, toggle] = useState<boolean>(false)
    const thumbnailSize = 50

    const handleClick = () => {
        setDetailsVisible(prevState => !prevState)
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Checkbox
                    checked={done}
                    onChange={(e) => toggle(prevState => !prevState)}
                    sx={{
                        color: "lightcyan",
                        flex: 1,
                    }}
                />
                <Typography
                    onClick={handleClick}
                    color={done ? "primary.light" : "common.white"}
                    variant="body1"
                    sx={{
                        flex: 10,
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    align="right"
                    color={done ? "primary.light" : "common.white"}
                    variant="body1"
                    sx={{
                        flex: 1,
                    }}
                >
                    {props.price.toLocaleString()}
                </Typography>
                <Box
                    component="img"
                    sx={{
                        height: thumbnailSize,
                        width: thumbnailSize,
                        px: 8,
                        py: 1,
                    }}
                    alt={props.title}
                    src={props.thumbnail}
                />
                <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleClick}
                    sx={{
                        mr: 2,
                    }}
                >
                    Купить
                </Button>
            </Box>
            {detailsVisible ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography
                        variant="body2"
                        sx={{px: 4}}
                    >
                        {props.description}
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            pt: 1,
                        }}
                        alt={props.title}
                        src={props.images[0]}
                    />

                </Box>
            ) : null}
        </>
    )
}

export default TableRow