import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Main = props => {
  const authContext = useContext(AuthContext);

  const { loadUser, token } = authContext;

  useEffect(() => {
    if (token) {
      loadUser();
    }
    // eslint-disable-next-line
  }, []);

  return <>{props.children}</>;
};

export default Main;
