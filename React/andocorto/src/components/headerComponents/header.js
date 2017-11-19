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
<a href = "http://165.227.60.168:3000"> Home </a>
</li>
<li className = "first">
<a href = "https://github.com/MikePineda/tecmihacksApp2017"> Repositorio </a>
</li>
</ul>
</nav>
      </header>
    );
  }
}

export default Header;
