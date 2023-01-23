import { getJWTToken } from '@/utils/jwt';

const useToken = async () => {
  const jwtToken = await getJWTToken();
  if (!jwtToken) {
    await navigateTo('/login');
    return null;
  }
  return jwtToken;
};

export default useToken;
