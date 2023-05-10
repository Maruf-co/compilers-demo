import cn from 'classnames';

const Skeleton = ({ times = 1, className }) => {
  const style = {
    outer: cn('relative overflow-hidden bg-gray-200 rounded-lg mb-2.5', className),
    inner: `animate-shimmer absolute inset-0 -translate-x-full 
      bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200`,
  };

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={style.outer}>
          <div className={style.inner} />
        </div>
      );
    });

  return boxes;
};

export default Skeleton;
