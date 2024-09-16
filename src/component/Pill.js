import { useState } from "react"

export default function Pill({onUserClick, userName, changeTheMessage, closeUI}) {

  const [totalPill, setTotalPil] = useState()
  const [expense, setExpense] = useState('')
  const [select, setSelect] = useState('you')
  // const [split, setSplit] = useState(0)

  function splitPill() {
    select === 'you' ?
    // {userName} owens you 
      changeTheMessage(<span className="greenText">{userName} لازم يعطيك {+totalPill - +expense} </span>):
      changeTheMessage(<span className="redText"> {userName} لازم تعطيه {+totalPill - +expense}  </span>);
      // changeTheMessage(<span className="redText"> You Owens {userName}: {+totalPill - +expense}</span>);
    setTotalPil('');
    setExpense('');
    closeUI()
  }

  return(
    <div>
      {onUserClick && 
      <div className="pall" >
        <h1
          style={{direction: "rtl"}}
          >تقسيم الفاتوره انت و {userName}</h1>
        <div className="more_information" >
          <div>
            <input 
              type="number"
              value={totalPill}
              onChange={(e) => setTotalPil(e.target.value)}
            />
            <p><span>💰</span> قيمه الفاتوره</p>
          </div>
          <div>
            <input 
              type="number"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
            <p><span>🧍🏻‍♀️</span> كم انت بتدفع</p>
          </div>
          <div>
            <input 
              type="number"
              readOnly
              id="read_only_input"
              value={+totalPill - +expense}
            />
            <p><span>👫</span> لازم يدفع  {userName}</p>
          </div>
          <div>
            <select 
             className="select"
             value={select}
             onChange={e => setSelect(e.target.value)}
            >
              <option value='you' >انا</option>
              <option value={userName} >{userName}</option>
            </select>
            <p><span>🤑</span> من بيدفع</p>
          </div>
          <div>
            <button 
              className="btn split_btn"
              onClick={splitPill}
              >تقسييم الفاتوره</button>
          </div>
        </div>
      </div>
    }
    </div>
  )
}