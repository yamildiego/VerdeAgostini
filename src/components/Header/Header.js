import React from 'react';
import NavBar from './NavBar';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
class Header extends React.Component {
    state = {
        showBtnMobile: false,
        sideDrawerOpen: false
    }
    handleClickOpenMenu = () => {
        this.setState({ sideDrawerOpen: true })
    }
    handleClickCloseMenu = () => {
        this.setState({ sideDrawerOpen: false })
    }
    render() {
        return (
            <React.Fragment>
                <NavBar
                    handleClickOpenMenu={this.handleClickOpenMenu}
                />
                {
                    this.state.sideDrawerOpen &&
                    <Backdrop handleClickCloseMenu={this.handleClickCloseMenu} />
                }
                <SideDrawer
                    sideDrawerOpen={this.state.sideDrawerOpen}
                    handleClickCloseMenu={this.handleClickCloseMenu}
                />
            </React.Fragment>
        )
    }
}

export default Header;