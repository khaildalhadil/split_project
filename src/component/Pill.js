import { useState } from "react"


export default function Pill() {

  const [useCliekedSelect, setUseCliekedSelect] = useState(false)
  
  return(
    // {}
    <div className="pall" >
      <h1>split a bill with name</h1>
      <div className="more_information" >
        <div>
          <p><span>💰</span> Bill value</p>
          <input type="number" />
        </div>
        <div>
          <p><span>🧍🏻‍♀️</span> your expense</p>
          <input type="number" />
        </div>
        <div>
          <p><span>👫</span> name expens</p>
          <input type="number" />
        </div>
        <div>
          <p><span>🤑</span> Who is paying the bill? </p>
          <select className="select " >
            <option>You</option>
            <option>name</option>
          </select>
        </div>
        <div>
          <button className="btn split_btn" >Split bill</button>
        </div>
      </div>
    </div>
  )
}