import React from 'react';

function ProjectLinkLive(props) {
  const { name, href } = props;

  return (
    <>
      See the project live on{' '}
      <a
        className="o-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}{' '}
      </a>
    </>
  );
}

export default ProjectLinkLive;
