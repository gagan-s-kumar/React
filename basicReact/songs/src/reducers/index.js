import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Backstreet Boys', duration: '3:45'},
    { title: 'Adele', duration: '5:25'},
    { title: 'Nick Jones', duration: '2:25'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
