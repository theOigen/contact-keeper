import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Main = props => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return <>{props.children}</>;
};

export default Main;
