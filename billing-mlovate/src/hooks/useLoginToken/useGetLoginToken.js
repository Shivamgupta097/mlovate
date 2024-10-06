import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const useLoginToken = () => {
  const [state, setState] = useState({ loggedIn: null, token: null });

  useEffect(() => {
    setTimeout(() => {
      const token = cookies.get('at');
      if (token) {
        setState({ loggedIn: true, token });
      } else {
        setState({ loggedIn: false, token: null });
      }
    }, 2000);
  }, []);

  return state;
};

export default useLoginToken;
