import React from 'react';
import gitHubLogo from '../img/GitHub-Mark-32px.png';

function ProjectLinkGitHub(props) {
  const { name, href } = props;

  return (
    <a className="o-link" href={href} target="_blank" rel="noopener noreferrer">
      {name} <span aria-hidden="true">&#8599;</span>
      <img
        className="o-link__img"
        src={gitHubLogo}
        alt=""
        title="https://github.com/logos"
        aria-hidden="true"
      />
    </a>
  );
}

export default ProjectLinkGitHub;
