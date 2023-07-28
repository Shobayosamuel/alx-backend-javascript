export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((err) = {
      console.error(err);
      return new Error();
    })
}
