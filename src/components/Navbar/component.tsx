import React from 'react';
import { Link } from 'react-router-dom';
import { Style } from '../../context/StylesContext';
export interface ReactProps {
  children: React.ReactNode;
}

export default class Component extends React.Component<ReactProps> {
  public static contextType = Style;

  public context!: React.ContextType<typeof Style>;

  public render() {
    const { state, toggleMenu } = this.context;
    return (
      <React.Fragment>
        <header>
          <div
            role="menu"
            onClick={() => {
              toggleMenu();
            }}
            className={state.clicked ? 'menu-btn close' : 'menu-btn'}
          >
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <nav>
            <div className={state.clicked ? 'menu show' : 'menu'}>
              <div
                className={
                  state.clicked ? 'menu-branding show' : 'menu-branding'
                }
              >
                <div className="portrait" />
              </div>
              <ul className={state.clicked ? 'menu-nav show' : 'menu-nav'}>
                <li className={state.clicked ? 'nav-item show' : 'nav-item'}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className={state.clicked ? 'nav-item show' : 'nav-item'}>
                  <Link to="/about" className="nav-link">
                    About Me
                  </Link>
                </li>
                <li className={state.clicked ? 'nav-item show' : 'nav-item'}>
                  <Link to="/work" className="nav-link">
                    My Work
                  </Link>
                </li>
                <li className={state.clicked ? 'nav-item show' : 'nav-item'}>
                  <Link to="/" className="nav-link">
                    How to Reach Me
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <React.Fragment>{this.props.children}</React.Fragment>
      </React.Fragment>
    );
  }
}
