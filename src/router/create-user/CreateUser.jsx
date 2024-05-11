import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/usersSlice'
import "./CreateUser.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { PiSelectionAllFill } from 'react-icons/pi'
import { BsInfoCircle } from 'react-icons/bs'
import { toast } from 'react-toastify'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

const initialState = {
  name: "",
  profession: "",
  age: "",
  tel: "",
  adress: "",
  gender: ""
}

function CreateUser() {
  const dispatch = useDispatch()

  // States
  const [data, setData] = useState(initialState)
  const [value, setValue] = useState()

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: new Date().getTime(),
      name: data.name,
      profession: data.profession,
      age: +data.age,
      tel: +data.tel,
      adress: data.adress,
      gender: data.gender
    }
    toast.success("Succesfully created")
    setData(initialState)
    dispatch(addToUsers(newUser))
  }

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <div className="create__user-content">
        <form onSubmit={handleSubmit} className='create__user-form' action="">
          <input required value={data.name} onChange={e => setData(prev => ({...prev, name: e.target.value}))} type="text" placeholder='name' />
          <input required value={data.profession} onChange={e => setData(prev => ({...prev, profession: e.target.value}))} type="text" placeholder='profession' />
          <input required value={data.age} onChange={e => setData(prev => ({...prev, age: e.target.value}))} type="number" placeholder='age' />
          <input required value={data.tel} onChange={e => setData(prev => ({...prev, tel: e.target.value}))} type="number" placeholder='phone number' />
          <Input
            country="UZ"
            value={value}
            onChange={setValue}
          />
          <input required value={data.adress} onChange={e => setData(prev => ({...prev, adress: e.target.value}))} type="text" placeholder='adress' />
          <select required value={data.gender} onChange={e => setData(prev => ({...prev, gender: e.target.value}))} name="" id="">
            <option disabled value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type='submit'>Create</button>
        </form>
        <div>
          <h3>Live appearance of user card</h3>
          <div className="users__card">
            <div className={data.gender === "" ? "img" : "noImg"}>
              <img src={data.gender === "male" ? male : female} alt="" />
            </div>
            <h2>{data.name ? data.name : "Name"}</h2>
            <p>{data.profession ? data.profession : "Profession"}</p>
            <p>{data.age ? data.age : "32"}</p>
            <div>
              <button className='remove-btn'>Remove</button>
              <button className='select-btn'>
                {
                  <PiSelectionAllFill/> 
                }
              </button>
            </div>
            <button onClick={() => setModal(true)} className='info-btn'><BsInfoCircle /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser