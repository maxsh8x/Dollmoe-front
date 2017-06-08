import React from 'react';
import TorrentList from '../presenters/TorrentList';
import fetcher from '../../utils/fetcher';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      limit: 20,
      offset: 0,
      count: 0,
      sortBy: '_id',
      order: -1,
      loading: false,
    };
    this.getData = this.getData.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { limit, offset, sortBy, order } = this.state;
    this.getData(limit, offset, sortBy, order);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getData(limit, offset, sortBy, order) {
    return fetcher.post('/v1/torrent/list', {
      limit,
      offset,
      sortBy,
      order,
    })
      .then((response) => {
        const { data: newData, count } = response.data;
        const { data: oldData } = this.state;
        oldData.concat(newData);
        this.setState({
          oldData,
          limit,
          offset,
          count,
          loading: false,
        });
      });
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const { limit, offset, sortBy, order } = this.state;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.getData(
        limit,
        offset + limit,
        sortBy,
        order,
      );
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <TorrentList {...{ data }} />
      </div>
    );
  }
}

export default ListContainer;
