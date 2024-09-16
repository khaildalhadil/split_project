import {useState} from 'react'

export default function AddFriend({sendDataToParent}) {

  const [showList, setShowList] = useState(false)
  const [name, setName] = useState('')
  const [img, setImage] = useState('')

  function show() {
    setShowList(!showList)
  }

  function onAdd() {
    if (name === '' || img === '') return
    sendDataToParent(name, img)
    setShowList(!showList)
    setName('')
    setImage('')
  }

  return (
    <div className="add_meanu" >
      {showList &&
      <div className="add_div" >
        <div className="friend_name" >
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            type="text" />
          <p><span>👩🏻‍🤝‍👩🏻</span>:اسم الصديق</p>
        </div>

        <div className="img" >
          <input
            type="text"
            value={img}
            onChange={(e) => setImage(e.target.value)}
             />
          <p><span>📸</span>:رابط الصوره</p>
        </div>
        <button onClick={onAdd} className=" btn add_btn" >اضافة</button>
      </div>
      }

      <button onClick={show} className=" btn toggle_btn" >{showList ? 'اغلاق': 'اضافه صديق' }</button>
    </div>
  )
}