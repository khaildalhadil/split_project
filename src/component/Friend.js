export default function Friend () {
  return(
    <div className="cards" >
      <Item />
      <Item />
      <Item />
    </div>
  )
}

function Item() {
  return (
    <div className="card" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwrdc-Y9SPttKRZIc3uD7BLvFvV1fi5XzlQ&s" alt="face" />
      <div className="center_text" >
        <h3>Khalid</h3>
        <span>You Own Clark 7$</span>
      </div>
      <button>Select</button>
    </div>
  )
}