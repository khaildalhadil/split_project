

export default function Pill() {
  return(
    <div className="pall" >
      <h1>split a bill with name</h1>
      <div className="more_information" >
        <div>
          <p><span>💰</span> Bill value</p>
          <input type="text" />
        </div>
        <div>
          <p><span>🧍🏻‍♀️</span> your expense</p>
          <input type="text" />
        </div>
        <div>
          <p><span>👫</span> name expens</p>
          <input type="text" />
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