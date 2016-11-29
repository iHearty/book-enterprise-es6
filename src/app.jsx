import * as React from 'react';

export class AppWrapper extends React.Component {
   constructor(props) {
      super(props);
      let a, b;

      for(let i in [1, 2]) {
         i++;
         a = i;
      }

      for(let i; i < 100; i++) {
         i++;
      }

      a + a;
      b + b;

      if(a == 1) {
         a + a;
      }
      else if(b) {
         b + b;

         return 1;
      }

      var foo = {
         'bar': 1
      };

      foo;
   }

   render() {
      return this.props.children;
   }
}

function abc() {
   var dd = function() {
   };

   var obj = {
      '1': 2
   };

   obj['1'];
   dd();

   [1, 2];
   let a = 'b';

   if(a == 'a') {
      console.log(a + a);
   }
}

abc();