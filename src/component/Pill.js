import { useState } from "react"

export default function Pill({onUserClick, userName, changeTheMessage, closeUI}) {

  const [totalPill, setTotalPil] = useState()
  const [expense, setExpense] = useState('')
  const [select, setSelect] = useState('you')
  // const [split, setSplit] = useState(0)

  function splitPill() {
    select === 'you' ?
      changeTheMessage(<span className="greenText">{userName} owens you {+totalPill - +expense}</span>):
      changeTheMessage(<span className="redText"> You Owens {userName}: {+totalPill - +expense}</span>);
    setTotalPil('');
    setExpense('');
    closeUI()
  }

  return(
    <div>
      {onUserClick && 
      <div className="pall" >
        <h1>split a bill with {userName}</h1>
        <div className="more_information" >
          <div>
            <p><span>💰</span> Bill value</p>
            <input 
              type="number"
              value={totalPill}
              onChange={(e) => setTotalPil(e.target.value)}
            />
          </div>
          <div>
            <p><span>🧍🏻‍♀️</span> your expense</p>
            <input 
              type="number"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </div>
          <div>
            <p><span>👫</span> name expens</p>
            <input 
              type="number"
              readOnly
              id="read_only_input"
              value={+totalPill - +expense}
            />
          </div>
          <div>
            <p><span>🤑</span> Who is paying the bill? </p>
            <select 
             className="select"
             value={select}
             onChange={e => setSelect(e.target.value)}
            >
              <option value='you' >You</option>
              <option value={userName} >{userName}</option>
            </select>
          </div>
          <div>
            <button 
              className="btn split_btn"
              onClick={splitPill}
              >Split bill</button>
          </div>
        </div>
      </div>
    }
    </div>
  )
}