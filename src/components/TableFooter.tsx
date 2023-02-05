import Divider  from "@mui/material/Divider"
import Typography  from "@mui/material/Typography"

function TableFooter(props: { total: number }) {
    return (
        <>
            <Divider sx={{
                bgcolor: "primary.light",
                m: 1,
            }} />
            <Typography variant="h6" color="common.white" sx={{p: 1}}>
                Total Units: {props.total}
            </Typography>
        </>
    )
}

export default TableFooter