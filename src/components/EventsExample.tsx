import React, { useState } from "react";

interface EventsExampleProps {

}

function EventsExample({ }: EventsExampleProps) {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }
    function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(value)
    }
    function dragHandler(e: React.DragEvent<HTMLDivElement>) {
        console.log('DRAG')
    }
    function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(true)
    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(false)
    }
    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

    return (
        <>
            <div>
                <input value={value} onChange={changeHandler} type="text" />
                <button onClick={clickHandler}>Тестовая кнопка</button>
                <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
                <div onDrop={dropHandler} onDragLeave={dragLeaveHandler} onDragOver={dragWithPreventHandler} style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}></div>
            </div>
        </>
    )
}

export default EventsExample