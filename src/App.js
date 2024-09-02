import Friend from './component/Friend.js'
import AddFriend from './component/AddFriend.js'
import Pall from './component/Pill.js'

export default function App() {

  function handlFriendData(a, b) {
    alert(a, b)
    // sendDataToFriend()
  }

  return (
    <div className='content_all_comp' >
      <Friend  />
      <AddFriend addItem={handlFriendData}/>
      <Pall/>
    </div>
  );
}