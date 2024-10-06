import Cookies from 'universal-cookie';
const cookies = new Cookies();

const logout = () => {
  cookies.remove('at');
  return (window.location.href = '/login');
};

export default logout;
