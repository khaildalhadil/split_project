export default function Friend ({listOfItems}) {  

  return(
    <div className="cards" >
      {listOfItems.map(el => {
        return <Item el={el} />
      })
    }
    </div>
  )
}

function Item({el}) {
  return (
    <div className="card"  >
      <div className="card_fac_text" >
        <img src={el.img} alt="face" />
        <div className="center_text" >
          <h3>{el.name}</h3>
          <span>{`you and ${el.name} are even`}</span>
        </div>
      </div>
      <button>Select</button>
    </div>
  )
}