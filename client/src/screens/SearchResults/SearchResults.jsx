import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setResults } from '../../redux/reducers/moviesReducer';
import { BASE_URL } from '../../api/Api';
import './SearchResults.css';

const SearchResults = () => {
  const results = useSelector((state) => state.movies.results);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(BASE_URL, { params: { t: searchTerm } });
      dispatch(setResults(response.data));
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickMovieCard = (movieTitle) => {
    navigate(`/movie-details/${movieTitle}`);
  };

  useEffect(() => {
    if (searchTerm) searchMovies();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Livello Movie Search</h2>
        <input
          className='search__input__box'
          type='text'
          placeholder='Search by movie name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='search__button' onClick={searchMovies}>
          Search
        </button>
      </div>
      {isLoading ? (
        <h2 style={{ textAlign: 'center' }}>Loading.....</h2>
      ) : (
        <div className='movies__list'>
          {results && (
            <div className='movie__box__container'>
              {results.hasOwnProperty('Error') ? (
                <div className='movie__card'>{results.Error}</div>
              ) : (
                <div
                  className='movie__card'
                  onClick={() => onClickMovieCard(results.Title)}
                >
                  <div>
                    <img
                      src={results.Poster}
                      alt='///'
                      className='movie__poster'
                    />
                  </div>
                  <div className='movie__details__highlights'>
                    <h3>
                      {results.Title}(<span>{results.Year}</span>)
                    </h3>
                    <p>Director: {results.Director}</p>
                    <p>IMDB Rating: {results.imdbRating}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchResults;
