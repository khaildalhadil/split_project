import {useState} from 'react'

export default function Friend () {

  const [listOfItems, setListOfItems] = useState([])

  // function sendDataToFriend() {
  //   alert("Hi from Friend")
  //   // 
  //   // setListOfItems([...listOfItems, <Item />])
  // }

  return(
    <div className="cards" >
      <Item />
    </div>
  )
}

function Item({id}) {
  return (
    <div className="card" key={id} >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwrdc-Y9SPttKRZIc3uD7BLvFvV1fi5XzlQ&s" alt="face" />
      <div className="center_text" >
        <h3>Khalid</h3>
        <span>You Own Clark 7$</span>
      </div>
      <button 
      >Select</button>
    </div>
  )
}