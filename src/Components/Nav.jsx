import React, { useState, useRef, useEffect } from 'react';
import NavBtn from './NavBtn';
import { getPreviousIndex, getNextIndex } from '../Utils';

function Nav(props, ref) {
  const { navLinks, scrollIntoView } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [focused, setFocused] = useState('');
  const navBtnRef = useRef(null);

  function handleNavBtnClick() {
    setIsExpanded(!isExpanded);
  }

  function handleNavBtnKeyDown(e) {
    const { key } = e;

    switch (key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
      case 'Space':
      case 'Enter':
        e.preventDefault();
        setIsExpanded(true);
        setFocused(0);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp': {
        e.preventDefault();
        const lastIndex = navLinks.length - 1;
        setIsExpanded(true);
        setFocused(lastIndex);
        break;
      }
      default:
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setIsExpanded(false); // close the dropdown menu on smaller screens
    const link = e.target.getAttribute('data-key');
    const sectionIndex = navLinks.indexOf(link);
    scrollIntoView(sectionIndex);
    e.target.blur(); // remove the focus persisting after the nav link click
  }

  function handleKeyDown(e) {
    const { key } = e;

    switch (key) {
      case 'Enter':
        e.preventDefault();
        e.target.click();
        setFocused('navBtn');
        break;
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        e.preventDefault();
        setIsExpanded(false);
        setFocused('navBtn');
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft': {
        e.preventDefault();
        const thisLink = e.target.getAttribute('data-key');
        const thisIndex = navLinks.indexOf(thisLink);
        const previousIndex = getPreviousIndex(thisIndex, navLinks);
        setFocused(previousIndex);
        break;
      }
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
      case 'Right': // IE/Edge specific value
      case 'ArrowRight': {
        e.preventDefault();
        const thisLink = e.target.getAttribute('data-key');
        const thisIndex = navLinks.indexOf(thisLink);
        const nextIndex = getNextIndex(thisIndex, navLinks);
        setFocused(nextIndex);
        break;
      }
      case 'Home':
        e.preventDefault();
        setFocused(0);
        break;
      case 'End': {
        e.preventDefault();
        const lastIndex = navLinks.length - 1;
        setFocused(lastIndex);
        break;
      }
      // if typed a small or capital letter
      case /^[a-zA-Z]*$/.test(key) && key: {
        // Transforming to lower case for comparison with nav links
        const letter = key.toLowerCase();
        // Making sure that nav links are also in lower case
        const navLinksLowerCase = navLinks.map((navLink) =>
          navLink.toLowerCase()
        );
        // Get nav links that start with the typed letter
        const matchingNavLinks = navLinksLowerCase.filter((navLink) =>
          navLink.startsWith(letter)
        );
        // If no links start with the typed letter - return
        if (matchingNavLinks.length === 0) return;

        let indexToFocus;

        // If only one link starts with the typed letter
        if (matchingNavLinks.length === 1) {
          // Get this link
          const navLinkToFocus = matchingNavLinks[0];
          // Check its index in the list/ array of nav links
          indexToFocus = navLinks.indexOf(navLinkToFocus);
          // And focus
          setFocused(indexToFocus);
        }

        // If more than one link start with the typed letter -
        // focus the next link (relative to currently focused):
        // Get the index of the currently focused link
        const nowFocused = e.target.getAttribute('data-key');
        const currentIndex = navLinks.indexOf(nowFocused);

        // Get an array of indexes of each nav link that starts with the typed letter
        const matchingIndexes = matchingNavLinks.map((link) =>
          navLinks.indexOf(link)
        );

        // Check if any of the matching indexes is higher than the index of currently focused link
        const hasHigherIndex = matchingIndexes.some(
          (index) => index > currentIndex
        );

        if (hasHigherIndex) {
          // If yes, get the first/ the lowest higher index
          indexToFocus = matchingIndexes.find(
            (filteredIndex) => filteredIndex > currentIndex
          );
        } else {
          // else get the first/ lowest matching index
          indexToFocus = matchingIndexes[0];
        }

        setFocused(indexToFocus);
        break;
      }
      default:
    }
  }

  useEffect(
    () => {
      // Mark first menu item as selected after first render only
      ref.current[0].current.classList.add('active');
      // Roving tabindex
      ref.current[0].current.setAttribute('tabindex', '0');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (focused === 'navBtn') {
      navBtnRef.current.focus();
    } else if (typeof focused === 'number') {
      // focus the nav link with the given index
      ref.current[focused].current.focus();
    }
  }, [focused, ref]);

  const className = isExpanded ? 'is-expanded' : '';

  const navListItems = navLinks.map((navLink, index) => (
    <li key={navLink} className="l-nav-list__item" role="none">
      <a
        href={`#${navLink}`}
        ref={ref.current[index]}
        className={`c-nav__link c-nav__link--${navLink}`}
        role="menuitem"
        data-key={navLink}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex="-1"
      >
        {navLink.toUpperCase()}
      </a>
    </li>
  ));

  return (
    <nav className="c-nav l-nav t3">
      <NavBtn
        ref={navBtnRef}
        isExpanded={isExpanded}
        handleClick={handleNavBtnClick}
        handleKeyDown={handleNavBtnKeyDown}
      />

      <ul
        className={`l-nav-list ${className}`}
        id="menu"
        role="menu"
        aria-labelledby="menu-btn"
      >
        {navListItems}
      </ul>
    </nav>
  );
}

const forwardedNav = React.forwardRef(Nav);

export default forwardedNav;
