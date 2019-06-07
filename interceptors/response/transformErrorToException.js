import Error from '../../rpc/response/Error';

export default response => {
  if (Array.isArray(response) && response.some(el => el instanceof Error)) {
    throw response;
  }
  if (response instanceof Error) {
    throw response;
  }

  return response;
};
