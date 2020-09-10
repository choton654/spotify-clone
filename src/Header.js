import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css';
import { SongState } from './StateProvider';

function Header() {
  const {
    state: { user },
  } = SongState();

  return (
    <div className='header'>
      <div className='header_left'>
        <SearchIcon />
        <input placeholder='Search for Artist, Songs,' type='text' />
      </div>
      <div className='header_right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
