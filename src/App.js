import Friend from './component/Friend.js'
import AddFriend from './component/AddFriend.js'
import Pall from './component/Pill.js'

export default function App() {
  return (
    <div className='content_all_comp' >
      <Friend/>
      <AddFriend/>
      <Pall/>
    </div>
  );
}