export default function Friend ({listOfItems, handlnameClick}) {  
  return(
    <div className="cards"  >
      <ul>
        {listOfItems.map(el => {
          return <Item el={el} sendTarge tName={handlnameClick} key={el.id}  />
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
          <span>{`you and ${el.name} are even`}</span>
        </div>
      </div>
      <button
        onClick={() => showPill(el.name)}
        >Select
      </button>
    </li>
  )
}