import React from 'react';

function ErrorMessage () {
  return (
    <p style={{
      fontFamily: 'inherit',
      color: 'white',
      backgroundColor: '#A60000',
      padding: '10px',
      borderRadius: '3px',
      textAlign: 'center',
    }}
    >
      Не получилось отправить данные на сервер, пожалуйста проверьте введенные данные или попробуйте позже
    </p>
  );
}

export default ErrorMessage;
