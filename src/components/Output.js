import { useQuery } from 'react-query';

import Skeleton from './Skeleton';

const getCompiledCode = async () => {
  const res = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
    response.json()
  );

  return res;
};

const Output = ({ text, handleClose }) => {
  const { data, status } = useQuery('compiler', getCompiledCode);

  console.log(data);
  console.log(status);
  let content;
  if (status === 'loading') {
    content = <Skeleton className="w-full h-52" />;
  } else if (status === 'error') {
    content = <div>Error!</div>;
  } else {
    content = (
      <div className="panel mt-6 mx-2">
        <p className="panel-heading">Output:</p>
        <div className="content border rounded m-4 p-2">{text}</div>
        <button onClick={handleClose} className="button is-danger m-4">
          Close
        </button>
      </div>
    );
  }

  return content;
};

export default Output;
