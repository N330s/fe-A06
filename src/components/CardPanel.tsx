'use client';

import Card from './Card';
import { useReducer } from 'react';

type RatingAction = {
  type: 'UPDATE_RATING';
  venue: string;
  rating: number;
} | {
  type: 'REMOVE_RATING';
  venue: string;
};

type RatingsState = Map<string, number>;

function ratingsReducer(state: RatingsState, action: RatingAction): RatingsState {
  switch (action.type) {
    case 'UPDATE_RATING':
      const newState = new Map(state);
      newState.set(action.venue, action.rating);
      return newState;
    case 'REMOVE_RATING':
      const updatedState = new Map(state);
      updatedState.delete(action.venue);
      return updatedState;
    default:
      return state;
  }
}

export default function CardPanel() {
  const initialRatings = new Map([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0]
  ]);

  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  const handleRatingChange = (venue: string, newRating: number) => {
    dispatch({ type: 'UPDATE_RATING', venue, rating: newRating });
  };

  const handleRemoveRating = (venue: string) => {
    dispatch({ type: 'REMOVE_RATING', venue });
  };

  return (
    <div>
      <div style={{margin: '20px', display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', alignContent:'space-around'}}>
          <Card 
            venueName='The Bloom Pavilion' 
            imgSrc='/img/bloom.jpg' 
            rating={ratings.get('The Bloom Pavilion') || 0}
            onRatingChange={handleRatingChange}
          />
          <Card 
            venueName='Spark Space' 
            imgSrc='/img/grandtable.jpg' 
            rating={ratings.get('Spark Space') || 0}
            onRatingChange={handleRatingChange}
          />
          <Card 
            venueName='The Grand Table' 
            imgSrc='/img/sparkspace.jpg' 
            rating={ratings.get('The Grand Table') || 0}
            onRatingChange={handleRatingChange}
          />
      </div>
      
      <div className="mt-8 mx-4">
        <h2 className="text-xl font-bold mb-4 text-black">Venue List with Ratings</h2>
        <ul className="space-y-2">
          {Array.from(ratings.entries()).map(([venue, rating]) => (
            <li 
              key={venue}
              data-testid = {venue}
              onClick={() => handleRemoveRating(venue)}
              className="p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors text-black"
            >
              {venue}: {rating} stars
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}