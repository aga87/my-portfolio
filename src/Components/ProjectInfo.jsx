import React from 'react';

function ProjectInfo(props) {
  const { date, children, tags, links } = props;

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
        <td className="c-project-info__text">{tags}</td>
      </tr>

      <tr>
        <th rowSpan="2" className="c-project-info__heading">
          Code:
        </th>
        <td className="c-project-info__text">{links}</td>
      </tr>
    </table>
  );
}

export default ProjectInfo;
