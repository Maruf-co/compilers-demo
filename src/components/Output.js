import { useQuery } from 'react-query';

import Skeleton from './Skeleton';

const getCompiledCode = async (input) => {
  const headers = {
    'content-type': 'application/json',
    accept: 'application/json',
  };

  const res = fetch('http://46.19.69.151:8000/compile', {
    method: 'POST',
    body: JSON.stringify({ code: input }),
    headers,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return res;
};

const Output = ({ text, handleClose }) => {
  const { data, status } = useQuery('compiler', () => getCompiledCode(text));

  let content;
  if (status === 'loading') {
    content = <Skeleton className="w-full h-52" />;
  } else if (status === 'error') {
    content = <div>Error!</div>;
  } else {
    content = (
      <div className="panel mt-6 mx-2">
        <p className="panel-heading">Output:</p>
        <div className="content border rounded m-4 p-2">{data}</div>
        <button onClick={handleClose} className="button is-danger m-4">
          Close
        </button>
      </div>
    );
  }

  return content;
};

export default Output;
