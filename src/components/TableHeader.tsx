import {IUnit, createRandomUnit} from '../api'
import Button from "@mui/material/Button"
import Box  from "@mui/material/Box"

type Props = {
    setUnits: (arg: (prev: IUnit[]) => IUnit[]) => void
}

function TableHeader({ setUnits }: Props) {
    const handleAddUnit = async () => {
        const newUnit = await createRandomUnit()
        console.log('Add Unit', newUnit)
        setUnits(prev => ([newUnit, ...prev]))
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