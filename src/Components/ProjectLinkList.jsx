import React from 'react';

// fixme: ProjectLinks
// fixme: c-project-links?

function ProjectLinkList(props) {
  const { links } = props;

  const projectLinkListItems = links.map((link) => <li>{link}</li>);

  return <ul className="l-project-link-list">{projectLinkListItems}</ul>;
}

export default ProjectLinkList;
