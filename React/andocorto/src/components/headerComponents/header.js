import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

<div className="logo">
<img src="logo.png" />
</div>

<nav>
<ul>
<li className = "first">
<a href = "#"> Home </a>
</li>
<li>
<a href = "#"> PRO </a>
</li>
<li className = "last">
<a href = "#"> DIOSES </a>
</li>
</ul>
</nav>
      </header>
    );
  }
}

export default Header;
