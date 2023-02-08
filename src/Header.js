import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f60a.png"
          width="32"
          height="32"
          alt=""
        />
        Search your Favourite Emoji
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f607.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
