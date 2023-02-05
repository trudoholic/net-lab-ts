import {useState} from "react"
import { IUnit } from '../api'
import Box  from "@mui/material/Box"
import Checkbox  from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TableRow(props: IUnit) {
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false)
    const [done, toggle] = useState<boolean>(false)
    const imgSize = 50

    const handleClick = () => {
        setDetailsVisible(prevState => !prevState)
    }

    function imgSrc (size:number, text: string) {
        return `https://via.placeholder.com/${size}/336699?text=${text}`
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
                    color={done ? "primary.light" : "common.white"}
                    variant="body1"
                    sx={{
                        flex: 1,
                    }}
                >
                    {10000..toLocaleString()}
                </Typography>
                <Box
                    component="img"
                    sx={{
                        height: imgSize,
                        width: imgSize,
                        p: 1,
                    }}
                    alt={props.title}
                    src={imgSrc(imgSize, 'img' + props.id)}
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
                        {props.body}
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 512,
                            width: 512,
                            pt: 1,
                        }}
                        alt={props.title}
                        src={imgSrc(512, props.title)}
                    />

                </Box>
            ) : null}
        </>
    )
}

export default TableRow