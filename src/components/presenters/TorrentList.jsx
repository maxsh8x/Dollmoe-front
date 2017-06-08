import React from 'react';
import PropTypes from 'prop-types';

const TorrentList = props =>
  <table className="torrent-list">
    <thead>
      <tr>
        <th>Category</th>
        <th>Name</th>
        <th />
        <th>Size</th>
        <th>..</th>
        <th>..</th>
        <th>..</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((item) => {
          return (
            <tr key={item._id}>
              <td><img alt={item.subCategory} src={`/img/torrents/${item.subCategory}.png`} /></td>
              <td>{item.name}</td>
              <td><a href={`magnet:?xt=urn:btih:${item.hash}`}>[DL]</a></td>
              <td>{item.fileSize}</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>);
        })
      }
    </tbody>
  </table >;

TorrentList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TorrentList;
