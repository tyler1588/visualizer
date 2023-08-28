import ControlPanel from "./ControlPanel"
import DisplayBars from "./DisplayBars"

const AlgoPage = ( {algorithm }) => {
    return (
        <>
            <ControlPanel algorithm={algorithm}/>
            <DisplayBars />
        </>
    )
}

export default AlgoPage