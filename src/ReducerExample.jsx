import { useState, useReducer } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';


export function reducer(oldState, action) {
    if (action.type === 'UP') {
      return oldState + action.number
    } else if (action.type === 'DOWN') {
      return oldState - action.number
    } else if (action.type === 'RESET') {
      return 0
    }
  }
  
 export default function ReducerExample() {
    const [count, dispatch] = useReducer(reducer, 0)
    const [number, setNumber] = useState(1)
  
    function down() {
      dispatch({ type: 'DOWN', number: number })
    }
    function up() {
      dispatch({ type: 'UP', number: number })
    }
    function reset() {
      dispatch({ type: 'RESET', number: number })
    }

    const changeNumber = (e) => {
        setNumber(Number(e.target.value))
    }
  
    return (
      <div className='' style={{ display: 'flex', flexDirection: 'row', gap: '30px', justifyContent: 'center'}}>
        <div className='left'>
       <h3> useReducer를 사용한 state 변경 </h3>
       <input type='button' value='-' onClick={down}/>
       <input type='button' value='+' onClick={up}/>
       <input type='button' value='0' onClick={reset}/>
       <input type='text' value={number} onChange={changeNumber}  /> 
       <span>{count}</span>

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

          <div>
          <h3> Switch-case로 Syntax 변경 </h3>
          <SyntaxHighlighter language='javascript' style={nord}>
    {
    `
import { useState, useReducer } from 'react';

export function reducer(oldState, action) {
    switch (action.type) {
        case 'UP':
            return oldState + action.number;
        case 'DOWN':
            return oldState - action.number;
        case 'RESET':
            return 0;
        default:
            throw new Error(\`Unhandled action type\`);
    }
}

    export default function ReducerExample() {
    const [count, dispatch] = useReducer(reducer, 0);
    const [number, setNumber] = useState(1);

    function down() {
        dispatch({ type: 'DOWN', number: number });
    }
    function up() {
        dispatch({ type: 'UP', number: number });
    }
    function reset() {
        dispatch({ type: 'RESET' });
    }
            `
            }     
            </SyntaxHighlighter>
          </div>
</div>

    )
  }