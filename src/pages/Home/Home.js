import React from 'react';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      This single page app illustrates how to use Redux to manage notification messages displayed by a React
      component.  Messages can be displayed immediately or after a routing event.
    </p>
    <ul>
      <li>Click SHOW NOTIFICATION to immediately display notification</li>
      <li>
        Click SET NOTIFICATION to update notification message.  Then navigate to another page to see notification
        displayed after route change.
      </li>
    </ul>
  </div>
);

export default Home;
