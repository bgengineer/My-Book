import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingScreen from '../components/LodingScreen'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa';
import './Styles/Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getStatus, getError, fetchBook } from '../Redux/bookSlice';

function Home() {

  const[books, setBooks] = useState([])
  const[loading, setLoading] = useState(false)

  const API = "http://localhost:3000/book/"

  useEffect(() => {
    setLoading(true)
    axios.get(API).then((res) => {
      setBooks(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }, [])
  
  // const dispatch = useDispatch()
  // const books = useSelector(getBooks)
  // const status = useSelector(getStatus)
  // const error = useSelector(getError)

  // let loading = false

  // if(status === 'loading'){
  //   loading = true
  // }else{
  //   loading = false
  // }

  // useEffect(() => {
  //   if(status === 'idle'){
  //     console.log("calling fetchBook")
  //     console.log(status)
  //     dispatch(fetchBook())
  //   }
  // },[status, dispatch])
  
  return (
    <div className=''>
      <div className='header'> {/* justify Item to center */}
        <h1 className=''> Books List</h1> {/* add this in the right most side */}
        <Link to='/book/create' className='operation-icon'> {/* add this in the left most side*/}
          <FaPlusCircle style={{ color: 'orange', fontSize: '24px'}}/>
          {/* include add icon here */}
        </Link>

      </div>
      <div className='table-container'>
      {loading ? (
        <div className='loading-screen'>
            <LoadingScreen />
        </div>
       ) : (
  <table className='table'>
    <thead>
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Author</th>
        <th>Published Year</th>
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
      {
      books && books.length > 0 ? (
        books.map((book, index) => (
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.BookName}</td>
            <td >{book.Author}</td>
            <td>{book.PublishedYear}</td>
            <td>
              <div className='operation-icon'>
                <Link to={`/book/details/${book._id}`}>
                  <FaInfoCircle style={{ color: 'green' }}/>
                </Link>
                <Link to={`/book/update/${book._id}`}>
                  <FaEdit  style={{ color: 'blue' }}/>
                </Link>
                <Link to={`/book/delete/${book._id}`}>
                  <FaTrash style={{ color: 'red' }}/>
                </Link>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className='no-books'>No books found</td>
        </tr>
      )}
    </tbody>
  </table>
)}
</div>

    </div>
  )
}

export default Home