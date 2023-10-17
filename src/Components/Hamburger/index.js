import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../Hamburger/Ham.css";
import name from "../../assests/name.png";
// import dash from "../../assests/dash.png";
// import dashf from "../../assests/dashf.png";
// import income from "../../assests/income.png";
// import customer from "../../assests/customer.png";
// import promote from "../../assests/promote.png";
// import help from "../../assests/help.png";
// import product from "../../assests/product.png";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    return (
      <SideNav className="sidebar" expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <NavItem>
          {/* <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon> */}
          {/* <NavText className="main">Dashboard</NavText> */}
        </NavItem>
        <SideNav.Nav defaultSelected="dashboards">
          <NavItem eventKey="Dashboard" className="dashboard">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <h4>Dashboard</h4>
            </NavText>
          </NavItem>
          <NavItem eventKey="dashboards">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              Dashboard &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&gt;
            </NavText>
          </NavItem>
          <NavItem eventKey="product">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
              Product &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&gt;
            </NavText>
          </NavItem>
          <NavItem eventKey="customers">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
              Customers&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&gt;
            </NavText>
          </NavItem>
          <NavItem eventKey="income">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
              Income&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&gt;
            </NavText>
          </NavItem>
          <NavItem eventKey="promote">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
              Promote&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp;&gt;
            </NavText>
          </NavItem>
          <NavItem eventKey="help">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
              Help&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&gt;
            </NavText>
          </NavItem>
          <NavItem className="name" eventKey="name">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{
                  fontSize: "1.75em",
                }}
              />
            </NavIcon>
            <NavText>
              <img src={name} />
              &nbsp; Evan &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&gt;
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
