import React from 'react'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import LoadingScreen from '../components/LodingScreen'
import './Styles/Delete.css'
import { useSnackbar } from 'notistack'

function Delete() {
  const[loading, setLoading] = useState()
  const navigate = useNavigate()
  const {id} = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const deleteBook = () =>{
    setLoading(true)
    axios.delete(`http://localhost:3000/book/${id}`)
    .then(() => {
      setLoading(false)
      enqueueSnackbar("Book Deleted Successfully", {variant: 'warning'})
      navigate('/')
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }
  return (
    <div className='container'>
      <BackButton />
      <h1 className='title'> DELETE Book</h1>
      {
        loading ? <LoadingScreen /> : ''}
          <div className='message'>Are You Sure You Want To Delete this Book ?</div>
          <button className='button' onClick={deleteBook}>Yes, Delete it</button>
    </div>
  )
}

export default Delete