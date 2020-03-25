import React from 'react';

function Project(props) {
  const { name, imgSrc, altName, info } = props;

  return (
    <div className="c-project">
      <h3 className="c-project__name t3">{name}</h3>

      <div className="l-project-grid">
        <img
          className="c-project__img"
          src={imgSrc}
          alt={`Screenshot of ${altName} on MacBook and iPhone 8`}
        />

        <div>{info}</div>
      </div>
    </div>
  );
}

export default Project;
