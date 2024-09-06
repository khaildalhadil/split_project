import Friend from './component/Friend.js'
import AddFriend from './component/AddFriend.js'
import Pall from './component/Pill.js'
import {useState} from 'react'

export default function App() {

  const [listOfItems, setListOfItems] = useState([])
  const [nameClicked, setNameClicked] = useState('')
  const [useCliekedSelect, setUseCliekedSelect] = useState(false)
  const [message, setMessage] = useState('you and ali are even');

  function handlFriendData(name, img) {
    const id = listOfItems.length
    setListOfItems([...listOfItems, {name, img, id, useCliekedSelect, message}])
  }

  function handlNameClick(element) {
    setNameClicked(element.name)
    setListOfItems(listOfItems.map(el => el === element ? {...el, useCliekedSelect: !useCliekedSelect}: el));
    setUseCliekedSelect(!useCliekedSelect)
  }

  // function newMessage(newMe, id) {
  //   setListOfItems(listOfItems.map(el => ))
  // }

  // https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg
  // https://t3.ftcdn.net/jpg/01/97/11/64/360_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg

  return (
    <div className='content_all_comp' >
      <Friend listOfItems={listOfItems} handlnameClick={handlNameClick} message={message}/>
      <AddFriend sendDataToParent={handlFriendData}  />
      <Pall onUserClick={useCliekedSelect} userName={nameClicked} />
    </div>
  );
}