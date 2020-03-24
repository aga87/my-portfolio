import React from 'react';

//  todo: https://www.w3.org/WAI/tutorials/tables/one-header/ -->

// fixme: only image size - sizes? then can't keep it as a component!

// todo: grid styles

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
