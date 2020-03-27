import React from 'react';

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer className="c-footer l-footer">
      <p className="c-footer__text s1">
        &copy; {yearNow}
        <span lang="pl"> A. Łabonarska</span>
      </p>
    </footer>
  );
}

export default Footer;
