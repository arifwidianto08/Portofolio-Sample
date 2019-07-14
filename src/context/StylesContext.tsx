import React, { Component } from 'react';

const initialValue = {
  state: {
    clicked: false
  },
  toggleMenu() {}
};
export const Style = React.createContext({ ...initialValue });

interface StyleContextState {
  clicked: boolean;
}

export default class StylesContext extends Component<{}, StyleContextState> {
  public state = {
    // eslint-disable-next-line react/no-unused-state
    clicked: false
  };

  private toggleMenu = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked
    });
  };

  public render() {
    return (
      <Style.Provider
        value={{
          state: this.state,
          toggleMenu: this.toggleMenu
        }}
      >
        {this.props.children}
      </Style.Provider>
    );
  }
}
