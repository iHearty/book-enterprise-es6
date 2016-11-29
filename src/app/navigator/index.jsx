import * as React from 'react';

require('./index.scss');

export class AppNavigator extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         navigators: []
      }

      setTimeout(() => {
         let navs = [{
            name: '书籍、借阅',
            items: [{
               name: '书籍列表',
               href: '/books'
            },
            {
               name: '借阅记录',
               href: '/books/borrow-list'
            }]
         },
         {
            name: '用户管理',
            items: [{
               name: '用户列表',
               href: '/users'
            }]
         },
         {
            name: '辅助功能',
            items: [{
               name: '邮件催还'
            },
            {
               name: '系统通知'
            }]
         }];

         this.setState({
            navigators: navs
         })
      }, 3000);
   }

   render() {
      let items = [];

      this.state.navigators.forEach(group => {
         items.push(<dt key={group.name}>{group.name}</dt>);
         group.items.forEach(it => {
            items.push(<dd key={it.name}>{it.name}</dd>);
         });
      });

      return (
         <div className="navigator-wrapper">{items}</div>
      );
   }
}