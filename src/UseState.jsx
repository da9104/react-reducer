import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

function UseState() {
  const [count, setCount] = useState(0)

  function down() {
    setCount(count -1)
  }

  function up() {
    setCount(count +1)
  }

  function reset() {
    setCount(0)
  }

  
  return (
    <div className=''>
      <h3> useState 를 사용한 state 변경 </h3>
      <input type='button' value='-' onClick={down}/>
      <input type='button' value='+' onClick={up} />
      <input type='button' value='0' onClick={reset} />
      <input placeholder={count}  />

 <SyntaxHighlighter language='javascript' style={nord}>
       {
        `
 import { useState } from 'react'

 function App() {
  const [count, setCount] = useState(0)

  function down() {
    setCount(count -1)
  }

  function up() {
    setCount(count +1)
  }

  function reset() {
    setCount(0)
  }

   return (
    <div className=''>
      <h3> useState 를 사용한 state 변경 </h3>
      <input type='button' value='-' onClick={down}/>
      <input type='button' value='+' onClick={up} />
      <input type='button' value='0' onClick={reset} />
      <input placeholder={count}  />
    </div>
       )
    }
        `
         }     
      </SyntaxHighlighter>
    </div> 
  )
}

export default UseState
