import React from 'react';
import PropTypes from 'prop-types';

function Tag({ onClick, onKeyDown, children, tagId }) {
  return (
    <div>
      <span>{children}</span>
      <button data-id={tagId} onClick={onClick} onKeyDown={onKeyDown} />
    </div>
  );
}

Tag.propTypes = {
  tagId: PropTypes.number,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Tag;
