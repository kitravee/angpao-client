export const getAuthHeader = (accessToken?: string) => {
  if (accessToken) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return {
    Authorization: 'Bearer GuestAG',
  };
};
