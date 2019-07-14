import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
export interface ReactProps {
  children: React.ReactNode;
}
export default function Component() {
  return (
    <Navbar>
      <main id="home">
        <h1 className="lg-heading">
          John <span className="text-secondary">Doe</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Designer & Enterpreneur
        </h2>
        <div className="icons">
          <Link to="/">
            <i className="fab fa-twitter fa-2x" />
          </Link>
          <Link to="/">
            <i className="fab fa-facebook fa-2x" />
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin fa-2x" />
          </Link>
          <Link to="/">
            <i className="fab fa-github fa-2x" />
          </Link>
        </div>
      </main>
    </Navbar>
  );
}
