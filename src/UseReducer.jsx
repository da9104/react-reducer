import { useState, useReducer } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';


export function reducer(oldState, action) {
  if (action === 'UP') {
    return oldState + 1
  } else if (action === 'DOWN') {
    return oldState - 1
  } else if (action === 'RESET') {
    return 0
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  function down() {
    dispatch('DOWN')
  }
  function up() {
    dispatch('UP')
  }
  function reset() {
    dispatch('RESET')
  }

  return (
    <div className=''>
     <h3> useReducer를 사용한 state 변경 </h3>
     <input type='button' value='-' onClick={down}/>
     <input type='button' value='+' onClick={up}/>
     <input type='button' value='0' onClick={reset}/>
     <input placeholder={count} />


     <SyntaxHighlighter language='javascript' style={nord}>
       {
        `
 import { useReducer } from 'react'

 export function reducer(oldState, action) {
  if (action === 'UP') {
    return oldState + 1
  } else if (action === 'DOWN') {
    return oldState - 1
  } else if (action === 'RESET') {
    return 0
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  function down() {
    dispatch('DOWN')
  }
  function up() {
    dispatch('UP')
  }
  function reset() {
    dispatch('RESET')
  }

  return (
    <div className=''>
     <h3> useReducer를 사용한 state 변경 </h3>
     <input type='button' value='-' onClick={down}/>
     <input type='button' value='+' onClick={up}/>
     <input type='button' value='0' onClick={reset}/>
     <input placeholder={count} />
       )
    }
        `
         }     
      </SyntaxHighlighter>
    </div>
  )
}

export default App
