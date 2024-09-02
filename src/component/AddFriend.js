
export default function AddFriend() {
  return (
    <div className="add_meanu" >
      <div className="add_div" >
        <div className="friend_name" >
          <p><span>👩🏻‍🤝‍👩🏻</span>Friend name: </p>
          <input type="text" />
        </div>

        <div className="img" >
          <p><span>📸</span>Image URL: </p>
          <input type="text" />
        </div>
        <button className=" btn add_btn" >Add</button>
      </div>

      <button className=" btn toggle_btn" >Toggle</button>
    </div>
  )
}