import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const results = useSelector((state) => state.movies.results);
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className='header'>
        <button onClick={onClickBack}>back</button>
        <h2 style={{ textAlign: 'center' }}>MovieDetail</h2>
      </div>
      {results && (
        <>
          <h3>{results.Title}</h3>
          <p>
            {results.Year} {results.Runtime}
          </p>
          <img src={results.Poster} />
          <div className='genre__pills__container'>
            {results.Genre.split(',').map((item, idx) => (
              <button key={`genre-pills-${idx}`} className='genre__pills'>
                {item}
              </button>
            ))}
          </div>
          <p>{results.Plot}</p>

          <p>Director:{results.Director}</p>
          <p>Writers:{results.Writer}</p>
          <p>Cast :{results.Actors}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
