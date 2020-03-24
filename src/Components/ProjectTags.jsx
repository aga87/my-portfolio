import React from 'react';

function ProjectTags(props) {
  const { tags } = props;

  function getClassName(category) {
    switch (category) {
      case 'html':
        return 'u-border-html';
      case 'css':
        return 'u-border-css';
      case 'js':
        return 'u-border-js';
      case 'redux':
        return 'u-border-redux';
      case 'react':
        return 'u-border-react';
      default:
        return '';
    }
  }

  const tagListItems = tags.map((tag) => {
    const className = getClassName(tag.category.toLocaleLowerCase());
    return <li className={`c-project-tags__item ${className}`}>{tag.tag}</li>;
  });

  return <ul className="c-project-tags s1">{tagListItems}</ul>;
}

export default ProjectTags;
