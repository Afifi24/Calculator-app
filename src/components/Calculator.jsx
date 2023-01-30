import React,{useState} from 'react'
import styled from 'styled-components'
import Color from './Color'
const Calculator = () => {
  const [Input,setInput] = useState([])
  const SetTheme = (color)=>{
    document.documentElement.style.setProperty('--bg-color',color)
  }
  const Setcolor  = (e)=>{
    const CurrentColor = e.target.style.getPropertyValue('--bg-color')
    SetTheme(CurrentColor)
  }
   const SetValue =(e)=>{
    setInput((prev)=>prev+=e.target.value)
   }
   const DeleteBtn = ()=>{
    setInput(Input.slice(0,-1))
   }
   const Equal = ()=>{
    setInput(eval(Input))
   }
  
   const Reset = ()=>{
    setInput('')
  
   }
   const Colors = [
        
       '#4834d4',
       '#be2edc',
       '#f9ca24',
        
   ]
  return (
    <Calculatorstyle>  
     <div className="container">
     <div className='header'>
        <div className="head">
        <h4>calc</h4>
        <div className='color-content'>
          {Colors.map((color,idx)=>{
            return <Color Setcolor={Setcolor} key={idx} color={color}/>
          })}
        </div>
        </div>
        <input value={Input} type="text" />
        
      </div> 
       <main>
         <div className="number">
          <button onClick={SetValue} value={7}>7</button>
          <button onClick={SetValue} value={8}>8</button>
          <button onClick={SetValue} value={9}>9</button>
          <button onClick={DeleteBtn} className='del'>DEL</button>
         </div>
         <div className="number">
          <button onClick={SetValue} value={4} >4</button>
          <button onClick={SetValue} value={5}>5</button>
          <button onClick={SetValue} value={6}>6</button>
          <button onClick={SetValue} value={'+'}>+</button>
         </div>
         <div className="number">
          <button onClick={SetValue} value={1}>1</button>
          <button onClick={SetValue} value={2}>2</button>
          <button onClick={SetValue} value={3}>3</button>
          <button onClick={SetValue} value={'-'} >-</button>
         </div>
         <div className="number">
          <button onClick={SetValue}  value={'.'}>.</button>
          <button onClick={SetValue} value={0}>0</button>
          <button onClick={SetValue} value={'/'}>/</button>
          <button onClick={SetValue} value={'*'}>x</button>
         </div>
         <div className="reset">
          <button onClick={Reset} className='res'>RESET</button>
          <button onClick={Equal} className='equal'>=</button>
         </div>
       </main>
     </div>

    </Calculatorstyle>
  )
}

export default Calculator

const Calculatorstyle = styled.div`
display: flex;
justify-content: center;
margin: 4rem 0rem;
.header{
  input{
    width: 22rem;
    height: 5rem;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: .5rem;
    background-color: var(--screen1-background);
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
  }
  h4{
    color: #fff;
    font-size: 1.2rem;
  }
  .head{
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
    .color-content{
      padding: 0.3rem 0.5rem;
      display: flex;
      gap: 0.5rem;
      background-color: #fff;
      border-radius: 1rem;
    }
  }
}
main{
  margin-top: 1rem;
  background-color: var(--toggle1-background-keypad-background);
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem;
  gap: 1.3rem;
  width: 22rem;

  
}
.number{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button{
   width: 4rem;
   height: 2.3rem;
   border: none;
   border-radius: 0.5rem;
   /* background-color: var(--orange-key-background); */
   background-color: var(--bg-color);
   font-size: 1.4rem;
   color: var(--grayish-blue);
   font-weight: 700;
   box-shadow: 0px 2.5px var(--orange-key-shadow);
   transition: var(--transition);
   cursor: pointer;
   &:hover{
    background-color: var(--color-white);
   }
  }
  .del{
    font-size: 1.2rem;
    background-color: var(  --blue-key-background);
    box-shadow: 0px 3px var(--key1-shadow);
    color: #fff;
    &:hover{
background-color: var(  --blue-key-background-hover);
    }
  }
}
.reset{
  width: 100%;
  display: flex;
  gap: 1rem;
  button{
    width: 50%;
    height: 2.4rem;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }
  .res{
    font-size: 1rem;
    background-color: var(--blue-key-background);
    box-shadow: 0px 3px var(--key1-shadow);
    &:hover{
     background-color: var(--blue-key-background-hover);
    }
  }
  .equal{
    font-size: 1rem;
    background-color: var(--key1-background-toggle);
    box-shadow: 0px 3px var(--key11-shadow);
    &:hover{
     background-color: var(--key11-shadow-hover);
    }
  }
}
/* MEDIA QUERIES */
@media screen and (max-width:400px) {
  .header{
    width: 20rem;
  input{
    width: 20rem;
  }
  
  }
  main{
    width: 20rem;

  }
}
`