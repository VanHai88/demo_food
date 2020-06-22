import React from "react"
import { Route, Link } from "react-router-dom"
import "./Menu.css"
import LoginRegister from "../LoginRegister/LoginRegister"

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false
  },
  {
    name: "Bài viết",
    to: "/share",
    exact: false
  },
  {
    name: "Giới thiệu",
    to: "/about",
    exact: false
  }
]

const MenuLink = ({ lable, to }) => {
  return (
    <Route path={to} exact children={
      ({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className="my-link">{lable}</Link>
          </li>
        )
      }
    }
    />
  )
}

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <div className="container">
          <div className="menu_block">
            <div className="menu-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="menu-nav">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                      {this.showMenu(menus)}
                      <li><a href="#a"><i className="fas fa-search"></i></a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        <span className="glyphicon glyphicon-user"></span> Đăng nhập
                                            </button>
                      <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal_login">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                            <LoginRegister />
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="menu-cart">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>

      </div>

    )
  }

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            lable={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.activeOnlyWhenExact}
          />
        )
      })
    }
    return result;
  }

  showLogin = () => {
    return (
      <Route path="/login" exact children={
        ({ match }) => {
          var active = match ? "active" : "";
          return (
            <li className={`${active}`}>
              <Link to="/login" className="my-link"></Link>
            </li>
          )
        }
      }
      />
    )
  }
}

export default Menu;