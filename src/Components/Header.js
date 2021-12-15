import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          <li className="page-item " aria-current="page">
            <span className="page-link">Bai 2: Component</span>
          </li>
          <li className="page-item"><a className="page-link">Trang chu</a></li>
          <li className="page-item active" ><a className="page-link" >Danh muc san pham</a></li>
        </ul>
      </nav>
    );
  }
}
export default Header;
