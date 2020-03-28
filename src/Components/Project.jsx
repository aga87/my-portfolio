import React from 'react';

function Project(props) {
  const { name, imgSrc, altName, date, tags, links, children } = props;

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

  // fixme: what to use as key instead of index?
  const tagListItems = tags.map((tag, index) => {
    const className = getClassName(tag.category.toLocaleLowerCase());
    return (
      <li key={index} className={`c-project-tags__item ${className}`}>
        {tag.tag}
      </li>
    );
  });
  // fixme: what to use as key instead of index?

  const projectLinkListItems = links.map((link, index) => (
    <li key={index}>{link}</li>
  ));

  return (
    <div className="c-project">
      <h3 className="c-project__name t3">{name}</h3>

      <div className="l-project-grid">
        <img
          className="c-project__img"
          src={imgSrc}
          alt={`Screenshot of ${altName} on MacBook and iPhone 8`}
        />

        <table className="c-project-info">
          <tbody>
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
                <ul className="c-project-info__link-list">
                  {projectLinkListItems}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
