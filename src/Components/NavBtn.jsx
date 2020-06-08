import React from 'react';

function NavBtn(props, ref) {
  const { isExpanded, handleClick, handleKeyDown } = props;

  const className = isExpanded ? 'is-expanded' : '';
  const title = isExpanded ? 'Close menu' : 'Open menu';

  return (
    <button
      ref={ref}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
      title={title}
      className="c-nav__btn o-nav-btn"
      id="menu-btn"
      aria-haspopup="true"
      aria-controls="menu"
    >
      <span className={`o-nav-btn__bar ${className}`} />
      <span className={`o-nav-btn__bar ${className}`} />
      <span className={`o-nav-btn__bar ${className}`} />
    </button>
  );
}

const forwardedNavBtnRef = React.forwardRef(NavBtn);

export default forwardedNavBtnRef;
