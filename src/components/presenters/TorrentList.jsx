import React from 'react';
import PropTypes from 'prop-types';
import humanSize from '../../utils/humanSize';
import { magnetLink, catImgLink } from '../../utils/link';

const TorrentList = props =>
  <table className="torrent-list">
    <thead>
      <tr>
        <th>Category</th>
        <th>Name</th>
        <th />
        <th>Size</th>
        <th>D</th>
        <th>S</th>
        <th>L</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((item) => {
          return (
            <tr key={item._id}>
              <td><img src={catImgLink(item.subCategory)} alt={item.subCategory} /></td>
              <td>{item.name}</td>
              <td><a href={magnetLink(item.hash)}>[DL]</a></td>
              <td>{humanSize(item.fileSize)}</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>);
        })
      }
    </tbody>
  </table>;

TorrentList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TorrentList;
