import {useState} from 'react'

export default function AddFriend({addItem}) {

  const [showList, setShowList] = useState(false)
  const [name, setName] = useState('')
  const [img, setImage] = useState('')


  function show() {
    setShowList(!showList)
  }

  // function addItem() {
  //   alert(`Name: ${name}: Img: ${img}`)
  //   setShowList(!showList)
  // }

  return (
    <div className="add_meanu" >
      {showList &&
      <div className="add_div" >
        <div className="friend_name" >
          <p><span>👩🏻‍🤝‍👩🏻</span>Friend name: </p>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            type="text" />
        </div>

        <div className="img" >
          <p><span>📸</span>Image URL: </p>
          <input
            type="text"
            value={img}
            onChange={(e) => setImage(e.target.value)}
             />
        </div>
        <button onClick={addItem} className=" btn add_btn" >Add</button>
      </div>
      }

      <button onClick={() => show('a', 'b')} className=" btn toggle_btn" >{showList ? 'Close': 'Add Friend' }</button>
    </div>
  )
}