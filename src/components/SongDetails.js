import React from "react";
import { connect } from "react-redux";

function SongDetails({ song }) {
 if (!song) {
  return <div>please select a song</div>;
 }

 return (
  <div>
   <h3>Song Details:</h3>
   <p>
    Title: {song.title}
    <br />
    Duration: {song.duration}
   </p>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  song: state.selectedSong,
 };
};

export default connect(mapStateToProps)(SongDetails);
