import React, { useEffect, useState } from 'react'
import LoadingScreen from '../components/LodingScreen'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './Styles/Create.css' // Import the CSS file
import { useSnackbar } from 'notistack'

function Update() {

  const[BookName, setBookName] = useState('')
  const[Author, setAuthor] = useState('')
  const[PublishedYear, setPublishedYear] = useState('')
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:3000/book/${id}`)
    .then((res) => {
        setBookName(res.data.BookName)
        setAuthor(res.data.Author)
        setPublishedYear(res.data.PublishedYear)
        setLoading(false)
    }).catch((err) => {
        console.log(err)
        setLoading(false)
    })
  }, [])

  const updateBook = () => {
    const data = {
      BookName,
      Author,
      PublishedYear
    }
    setLoading(true)
    axios.put(`http://localhost:3000/book/${id}`, data).then(() => {
      setLoading(false)
      enqueueSnackbar("Book Updated Successfully", {variant: 'success'})
      navigate('/')
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }
  
  return (
    <div className="container">
      <BackButton />
      <h1 className="title">Add Book</h1>
      {loading && <LoadingScreen />}
      <div className="form-group">
        <label className="label">Book Name</label>
        <input type='text' value={BookName} onChange={(e) => setBookName(e.target.value)} className="input"/>
      </div>
      <div className="form-group">
        <label className="label">Author</label>
        <input type='text' value={Author} onChange={(e) => setAuthor(e.target.value)} className="input"/>
      </div>
      <div className="form-group">
        <label className="label">Published Year</label>
        <input type='text' value={PublishedYear} onChange={(e) => setPublishedYear(e.target.value)} className="input"/>
      </div>
      <button className="button" onClick={updateBook}>UPDATE</button>
    </div>
  )
}

export default Update
