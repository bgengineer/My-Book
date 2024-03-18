import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from '../components/LodingScreen';
import BackButton from '../components/BackButton';
import './Styles/Show.css'; // Import the CSS file

function Show() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/book/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container">
      <BackButton />
      <h1 className="title">Show Book</h1>
      {loading ? (
        <div className="loading-container">
          <LoadingScreen />
          <span className="loading-text">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="info">
            <span className="label">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="info">
            <span className="label">Title:</span>
            <span>{book.BookName}</span>
          </div>
          <div className="info">
            <span className="label">Author:</span>
            <span>{book.Author}</span>
          </div>
          <div className="info">
            <span className="label">Published Year:</span>
            <span>{book.PublishedYear}</span>
          </div>
          <div className="info">
            <span className="label">Discription:</span>
            <span>{book.Discription}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Show;
