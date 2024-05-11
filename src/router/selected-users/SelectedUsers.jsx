import React from 'react'
import './SelectedUsers.css'
import Users from '../../components/users/Users'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'

const SelectedUsers = () => {
  let users = useSelector(state => state.selectedCards.value)
  console.log("selected users >>>", users);
  return (
    <div className='selectedUsers'>
        {
            users.length ? <Users data={users}/> : <Empty/>
        }
    </div>
  )
}

export default SelectedUsers