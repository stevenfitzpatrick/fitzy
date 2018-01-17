import React from 'react';
import PropTypes from 'prop-types';

function Tag({ onRemove, onKeyDown, children, tagId }) {
  return (
    <div>
      <span>{children}</span>
      <button data-id={tagId} onClick={onRemove} onKeyDown={onKeyDown} />
    </div>
  );
}

Tag.propTypes = {
  tagId: PropTypes.number,
  onRemove: PropTypes.func,
  onKeyDown: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Tag;
