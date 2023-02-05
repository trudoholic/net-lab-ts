// import React from "react";

function TableHeader() {
    const handleAddUnit = () => {
        console.log('Add Unit')
    };

    return (
        <div>
            <button onClick={handleAddUnit}>Add Unit</button>
        </div>
    );
}

export default TableHeader