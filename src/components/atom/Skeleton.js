import React from 'react';
import PropTypes from 'prop-types';

 const Skeleton = (props) => {
  const { className } = props;

  return (
    <div className={"animate-pulse text-center align-middle pt-40 text-black font-bold"+ className}>Loading..</div>
  );
}

Skeleton.defaultProps = {
  className: 'w-full h-full',
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

export default Skeleton;