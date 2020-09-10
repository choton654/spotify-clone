import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { SongState } from './StateProvider';

const Body = ({ spotify }) => {
  const {
    state: { discover_weekly, user },
  } = SongState();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body_info'>
        <img src={user?.images[0].url} alt='album' />
        <div className='body_infoText'>
          <strong>Playlist</strong>
          <h2>discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilled className='body_shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
