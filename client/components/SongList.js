import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongList extends Component {
  render() {
    return (
      <div>
        <h1>I'm the SongList component</h1>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;