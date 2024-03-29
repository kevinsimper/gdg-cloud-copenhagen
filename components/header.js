import {
  LitElement,
  css,
  html
} from "https://cdn.pika.dev/-/lit-element/2.2.1/dist-es2019/lit-element.min.js";

export const navigation = () => html`
  <nav>
    <a href="/" class="item">Home</a>
  </nav>
  <style>
    @media (max-width: 760px) {
      nav a {
        display: block;
        padding: 10px 20px;
      }
    }
  </style>
`;

class Header extends LitElement {
  static get styles() {
    return css`
      .menu {
        background: #1b1c1d;
        color: white;
        height: 60px;
        width: 100vw;
      }

      .container {
        max-width: 940px;
        margin: 0 auto;
        display: flex;
      }
      .header {
        font-weight: bold;
      }
      .item {
        color: white;
        line-height: 60px;
        padding: 0 15px;
        text-decoration: none;
      }
      nav {
        display: none;
      }
      .showmenu {
        display: block;
      }
      @media (min-width: 760px) {
        nav {
          display: block;
        }
        .showmenu {
          display: none;
        }
      }
    `;
  }
  render() {
    return html`
      <header class="menu">
        <div class="container">
          <a href="/" class="header item">GDG Cloud Copenhagen</a>
          ${navigation()}
          <a href="/#!menu" class="showmenu item">Show Menu</a>
        </div>
      </header>
    `;
  }
}

customElements.define("x-header", Header);
