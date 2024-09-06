export default function Friend ({listOfItems, handlnameClick, message}) {  

  return(
    <div className="cards"  >
      <ul>
        {listOfItems.map(el => {
          return <Item el={el} sendTargetName={handlnameClick} key={el.id} message={message}/>
          })
        }
      </ul>
    </div>
  )
}

function Item({el, sendTargetName, message}) {

  function showPill(name) {
    sendTargetName(name)
  }

  return (
    <li className="card">
      <div className="card_fac_text" >
        <img src={el.img} alt="face" />
        <div className="center_text" >
          <h3>{el.name}</h3>
          <span>{message}</span>
        </div>
      </div>
      <button
        onClick={() => showPill(el)}>
        {!el.useCliekedSelect? 'Select': 'Close'}
      </button>
    </li>
  )
}