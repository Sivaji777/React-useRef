import React, { useRef, useState } from 'react'

function Ref() {
 const [name, setName]=useState('')
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        
        setName(focusPoint.current.value)
      };

  return (
    <div>
    <h1>useRef Hook...........</h1>
      <h1>{name}</h1>
       <input type='text' ref={focusPoint} />
       <button onClick={onClickHandler}>
       ACTION
      </button>
    </div>
  )
}

export default Ref