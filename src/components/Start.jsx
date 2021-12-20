import React, { useRef } from 'react'



const Start = ({ setUserName }) => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
    }    
    return (
    <div className='start'>
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter name to play'
        className='inputName'
      />
      <button className='btnStart' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start
