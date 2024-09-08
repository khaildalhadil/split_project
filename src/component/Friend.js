export default function Friend ({listOfItems, handlnameClick}) {  

  return(
    <div className="cards"  >
      <ul>
        {listOfItems.map(el => {
          return <Item el={el} sendTargetName={handlnameClick} key={el.id}/>
          })
        }
      </ul>
    </div>
  )
}

function Item({el, sendTargetName}) {

  function showPill(name) {
    sendTargetName(name)
  }

  return (
    <li className="card">
      <div className="card_fac_text" >
        <img src={el.img} alt="face" />
        <div className="center_text" >
          <h3>{el.name}</h3>
          <span>{el.message}</span>
        </div>
      </div>
      <button
        onClick={() => showPill(el)}>
        {!el.useCliekedSelect? 'Select': 'Close'}
      </button>
    </li>
  )
}