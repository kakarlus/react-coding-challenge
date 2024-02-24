import Card from '../card/Card';
import PageTitle from '../page-title/PageTitle';
import IndefiniteLoader from '../loader-progress/IndefiniteLoader';
import LoadError from '../loader-progress/LoadError';
import './ShowsContainer.css';
import React, { useState, useEffect } from 'react';

const Movies = ({type}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./sample.json');
        const data = await response.json();
        const movies = data.entries.filter(entry => {
          return entry.releaseYear >= 2010 && entry.programType === type
        }).slice(0, 21);

        const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
        
        setItems(sortedMovies);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        console.error('Error fetching data:', error);
      }
    };
    setIsLoading(true);
    fetchData();
  }, []);
  
  return (
    <>
      <PageTitle>Popular {type === 'series' ? 'Series' : 'Movies'}</PageTitle>
      <div className='shows-container'>
        <div className='wrapper'>
          {isLoading && <IndefiniteLoader />}
          {hasError && <LoadError />}
          <ul>
            {items && items.map((item) => (<li key={item.title}><Card link={"/movies"} title={item.title} poster={item.images["Poster Art"].url} /></li>))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Movies;
