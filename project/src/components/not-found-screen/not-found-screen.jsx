import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen () {
  return (
    <section style={{textAlign: 'center'}}>
      <h1>404. Page not found</h1>
      <Link
        to="/"
        style={
          {
            color: 'white',
            padding: '10px',
            borderRadius: '3px',
            backgroundColor: '#4481c3',

          }
        }
      >Вернуться на главную
      </Link>
    </section>
  );
}

export default NotFoundScreen;
