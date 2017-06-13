import React from 'react';

const SearchWidget = () => <div className="search-widget">
  <select value="">
    <option value="all">Categories</option>
  </select>
  <select value="">
    <option value="all">Quality</option>
  </select>
  <select value="">
    <option value="all">Release groups</option>
  </select>
  <select value="">
    <option value="all">Containers</option>
  </select>
  <select value="">
    <option value="all">Subs</option>
  </select>
  <input type="text" placeholder="Search" value="" />
</div>;

export default SearchWidget;
