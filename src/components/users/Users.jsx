import React, { useState } from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromUsers } from "../../context/usersSlice"
import { toggleSelect } from "../../context/selectedUsersSlice"
import { BsInfoCircle } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { PiSelectionAllFill, PiSelectionAllLight } from 'react-icons/pi'
import { toast } from 'react-toastify'

function Users({ data }) {
  const dispatch = useDispatch()
  const selectedUsers = useSelector(state => state.selectedCards.value)

  const warn = () => toast.warning("User has been deleted");

  // States
  const [modal, setModal] = useState(false)
  console.log(modal);

  let users = data?.map(el => (
    <div key={el.id} className="users__card">
      <img src={el.gender === "male" ? male : female} alt="" />
      <h2>{el.name.trim() ? el.name : "No name"}</h2>
      <p>{el.profession.trim() ? el.profession : "No profession"}</p>
      <p>{el.age}</p>
      <div>
        <button className='remove-btn' onClick={() => { dispatch(removeFromUsers(el)); warn(); }}>Remove</button>
        <button className='select-btn' onClick={() => dispatch(toggleSelect(el))} >
          {
            selectedUsers?.some(e => e.id === el.id)
              ?
            <PiSelectionAllFill/> 
              :
            <PiSelectionAllLight />
          }
        </button>
      </div>
      <button onClick={() => setModal(true)} className='info-btn'><BsInfoCircle /></button>
    </div>
  ))
  return (
    <>
      <div className='users__wrapper'>
        {users}
      </div>
      {modal
        ?
        <>
          <div onClick={() => setModal(false)} className="modal">
          </div>
          <div className='modal__info'>
            <p><span>Name:</span> John Doe</p>
            <br />
            <p><span>Plans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum temporibus incidunt, atque voluptate placeat velit non eaque odio maiores mollitia quis neque odit molestias quasi repellat debitis obcaecati officia.</p>
            <br />
            <p><span>Adress:</span> Lorem ipsum dolor sit. </p>
            <p><span>Phone:</span> +998-000-0000 </p>
            <button onClick={() => setModal(false)} className='close-btn'><IoClose /></button>
          </div>
        </>
        :
        <></>}
    </>
  )
}

export default Users