import Friend from './component/Friend.js'
import AddFriend from './component/AddFriend.js'
import Pall from './component/Pill.js'
import {useState} from 'react'

export default function App() {

  const [listOfItems, setListOfItems] = useState([])

  function handlFriendData(name, img, message) {
    setListOfItems([...listOfItems, {name, img, message}])
  }

  return (
    <div className='content_all_comp' >
      <Friend listOfItems={listOfItems} />
      <AddFriend sendDataToParent={handlFriendData}/>
      <Pall/>
    </div>
  );
}