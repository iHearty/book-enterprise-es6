import * as React from 'react';

require('./index.scss');

export class SearchInput extends React.Component {
   render() {
      return (
         <div className="search-input-wrapper">
            <input type="text" placeholder="请输入搜索内容" />
            <div className="image-wrapper">
               <img src="search-icon.svg" alt=""/>
            </div>
         </div>
      );
   }
}