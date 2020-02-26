import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

export class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    _SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    render() {
        return (
            <Auxiliary>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this._SideDrawerClosedHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Auxiliary>
        );
    }
}

export default Layout;
