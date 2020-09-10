import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './SideBar.css';
import SidebarOption from './SidebarOption';
import { SongState } from './StateProvider';
const SideBar = () => {
  const {
    state: { playList },
  } = SongState();

  return (
    <div className='sidebar'>
      <img
        className='sidebar_logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <strong className='sidebar_title'>PLAYLIST</strong>
      <hr />

      {playList?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} key={playlist.id} />
      ))}
    </div>
  );
};

export default SideBar;
