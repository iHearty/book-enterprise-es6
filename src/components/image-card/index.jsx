import * as React from 'react';

require('./index.scss');

export class ImageCard extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      let info = this.props.info;

      return (
         <div className="image-card-wrapper">
            <img src={info.src} />
            <div className="image-card-text-wrapper">
               <div className="image-card-text">{info.text}</div>
            </div>
         </div>
      );
   }
}