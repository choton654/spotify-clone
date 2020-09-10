import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import Player from './Player';
import { actionType } from './reducer';
import { getTokenFromResponse } from './Spotify';
import { SongState } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, settoken] = useState('');

  const { state, dispatch } = SongState();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const token = hash.access_token;

    if (token) {
      settoken(token);

      dispatch({
        type: actionType.SET_TOKEN,
        payload: token,
      });
    }
    spotify.setAccessToken(token);

    spotify.getMe().then((user) =>
      dispatch({
        type: actionType.SET_USER,
        payload: user,
      }),
    );

    spotify.getUserPlaylists().then((playlist) => {
      dispatch({
        type: actionType.SET_PLAYLIST,
        payload: playlist,
      });
    });

    spotify
      .getPlaylist('37i9dQZEVXcJZyENOWUFo7')
      .then((res) => {
        console.log('discover', res);
        dispatch({
          type: actionType.SET_DISCOVER_WEEKLY,
          payload: res,
        });
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  return <div className='App'>{token ? <Player spotify /> : <Login />}</div>;
}

export default App;
