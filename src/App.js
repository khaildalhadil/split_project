import Friend from './component/Friend.js'
import AddFriend from './component/AddFriend.js'
import Pall from './component/Pill.js'
import {useState} from 'react'

export default function App() {

  const [listOfItems, setListOfItems] = useState([])

  function handlFriendData(name, img) {
    const id = listOfItems.length
    setListOfItems([...listOfItems, {name, img, id}])
  }

  const [nameClicked, setNameClicked] = useState('')

  function handlNameClick(name) {
    setNameClicked(name)
    console.log(nameClicked)
  }

  // https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg
  // https://t3.ftcdn.net/jpg/01/97/11/64/360_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg

  return (
    <div className='content_all_comp' >
      <Friend listOfItems={listOfItems} handlnameClick={handlNameClick}  />
      <AddFriend sendDataToParent={handlFriendData} />
      <Pall/>
    </div>
  );
}