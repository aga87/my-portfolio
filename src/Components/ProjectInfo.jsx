import React from 'react';

function ProjectInfo(props) {
  const { date, children, tags, links } = props;

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

  const projectLinkListItems = links.map((link) => <li>{link}</li>);

  return (
    <table className="c-project-info">
      <tr>
        <th className="c-project-info__heading">Completion date:</th>
        <td className="c-project-info__text">{date}</td>
      </tr>
      <tr>
        <th className="c-project-info__heading">Project description:</th>
        <td className="c-project-info__text c-project-info__text--justify">
          {children}
        </td>
      </tr>

      <tr>
        <th className="c-project-info__heading">Tags:</th>
        <td className="c-project-info__text">
          {/* {tags} */}
          {/* fixme: classname */}
          <ul className="c-project-tags s1">{tagListItems}</ul>
        </td>
      </tr>

      <tr>
        <th rowSpan="2" className="c-project-info__heading">
          Code:
        </th>
        <td className="c-project-info__text">
          {/* fixme: classname? */}
          <ul className="l-project-link-list">{projectLinkListItems}</ul>
          {/* {links} */}
        </td>
      </tr>
    </table>
  );
}

export default ProjectInfo;
