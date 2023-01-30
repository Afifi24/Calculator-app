import React from 'react'
import styled from 'styled-components'
const Color = ({color,Setcolor}) => {
  return (
    <Colorstyled>
        <div onClick={Setcolor} className='item' style={{'--bg-color':color}}>

        </div>
    </Colorstyled>
  )
}

export default Color

const Colorstyled = styled.div`
.item{
 width: 1.5rem;
 height: 1.5rem;
 border-radius: 50%;
 background-color:var(--bg-color) ;
 cursor: pointer;
}

`