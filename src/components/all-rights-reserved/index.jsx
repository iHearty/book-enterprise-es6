import * as React from 'react';

export class AllRightsReserved extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         text: `Copyright © 2013 - ${new Date().getFullYear()} ToGeek. All rights reserved`
      }
   }

   render() {
      return <span>{this.state.text}</span>;
   }
}