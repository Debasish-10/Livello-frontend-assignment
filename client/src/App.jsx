import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SearchResults from './screens/SearchResults/SearchResults';
import MovieDetail from './screens/MovieDetail/MovieDetail';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/movie-search' replace />} />
        <Route path='/movie-search' element={<SearchResults />} />
        <Route path='/movie-details/:id' element={<MovieDetail />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
