import Button from "@mui/material/Button"
import Box  from "@mui/material/Box"

function TableHeader() {
    const handleAddUnit = () => {
        console.log('Add Unit')
    }

    return (
        <Box sx={{
            display: 'flex',
            p: 1,
        }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddUnit}
            >
                Добавить
            </Button>

        </Box>
    )
}

export default TableHeader