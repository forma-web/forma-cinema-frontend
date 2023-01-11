import { getJWTToken } from '../helpers/jwt';

const useToken = async () => {
  const jwtToken = await getJWTToken();
  if (!jwtToken) {
    navigateTo('/login');
    return null;
  }
  return jwtToken;
};

export default useToken;