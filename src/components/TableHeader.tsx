import {IUnit, createUnit} from '../api'
import Button from "@mui/material/Button"
import Box  from "@mui/material/Box"

type Props = {
    units: IUnit[]
    setUnits: (arg: (prev: IUnit[]) => IUnit[]) => void
}

function TableHeader({ units, setUnits }: Props) {
    const handleAddUnit = async () => {
        const randomUnit = {...units[Math.floor(Math.random() * units.length)]}
        randomUnit.id = units.length + 1
        await createUnit(randomUnit)
        setUnits(prev => ([randomUnit, ...prev]))
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