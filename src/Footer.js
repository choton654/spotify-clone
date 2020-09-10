import { Grid, Slider } from '@material-ui/core';
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from '@material-ui/icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img
          className='footer_albumLogo'
          src='https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          alt='album'
        />
        <div className='footer_songInfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className='footer_center'>
        <Shuffle className='footer_green' />
        <SkipPrevious className='footer_icon' />
        <PlayCircleOutline fontSize='large' className='footer_icon' />
        <SkipNext className='footer_icon' />
        <Repeat className='footer_green' />
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
