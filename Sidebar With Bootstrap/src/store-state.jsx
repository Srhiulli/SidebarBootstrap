import { useState } from "react";



function ToggleButton({ action }) {
    const [isOpen, setOpenState] = useState(false);

    function changeModalState() {
        setOpenState(!isOpen)
        console.log(action())
    }

    return (
        <>
            <button className="transparent-btn" onClick={changeModalState}><i className="bi bi-caret-left-fill"></i></button>
        </>
    )


}

export default ToggleButton