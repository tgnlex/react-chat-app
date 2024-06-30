import type {Options} from '../types/fetchTypes';

const fetcher = (url: string, method: string, opts: Options) => {
  const response = fetch(`${url}`, {
    method: method,
    body: opts.data || null,
    headers: {
      "Content-Type": "application/json" + opts.headers
    }
  })
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    if (err) {
      console.error(err.message);
      return err;
    }
  })
  return response;
}

export {fetcher};
