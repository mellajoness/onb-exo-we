import React, { Component } from "react";

import { connect } from "react-redux";
import {
    // Row,
    // Col,
    // Form,
    // FormGroup,
    // InputGroup,
    // InputGroupAddon,
    // Input,
    Button,
    // Dropdown,
    // DropdownToggle,
    // DropdownMenu,
} from "reactstrap";

import { Link } from "react-router-dom";

// Import menuDropdown
// import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
// import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

//Import i18n
import { withNamespaces } from "react-i18next";

//Import Megamenu
// import MegaMenu from "./MegaMenu";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//Import logo Images
// import logosmdark from "../../assets/images/logo-sm-dark.png";
// import logodark from "../../assets/images/logo-dark.png";
import fidelitylogo from "../../assets/images/Logo.svg";
import fidelitylogoname from "../../assets/images/fidelitylogoname.svg";

//Import Social Profile Images
// import github from "../../assets/images/brands/github.png";
// import bitbucket from "../../assets/images/brands/bitbucket.png";
// import dribbble from "../../assets/images/brands/dribbble.png";
// import dropbox from "../../assets/images/brands/dropbox.png";
// import mail_chimp from "../../assets/images/brands/mail_chimp.png";
// import slack from "../../assets/images/brands/slack.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            isSocialPf: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleRightbar = this.toggleRightbar.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
    }
    /**
     * Toggle sidebar
     */
    toggleMenu() {
        this.props.toggleMenuCallback();
    }

    /**
     * Toggles the sidebar
     */
    toggleRightbar() {
        this.props.toggleRightSidebar();
    }


    toggleFullscreen() {
        if (
            !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                );
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">

                            <div className="navbar-brand-box">
                                <Link to="#" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src={fidelitylogo} alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={fidelitylogoname} alt="" height="24" />
                                    </span>
                                </Link>
                            </div>

                            <Button size="sm" color="none" type="button" onClick={this.toggleMenu} className="menuiconvisible" id="vertical-menu-btn">
                                <i className="ri-menu-2-line align-middle"></i>
                            </Button>
                            <div className="menuToggle" style={{display:'flex',alignItems:'center',paddingTop:'5px'}}>
                                <div style={{color:'#0D2565',fontSize:'1.1em',paddingTop:'5px'}}>Welcome back,</div> 
                                <div style={{color:'#0D2565',fontSize:'1.4em',paddingLeft:'0.3em',fontWeight:'bold',fontFamily:'lato'}}>Atinuoluwadide</div>
                            </div>
                        </div>

                        <div className="d-flex">
                           

                            {/* <div className="dropdown d-inline-block d-lg-none ms-2">
                                <button type="button" onClick={() => { this.setState({ isSearch: !this.state.isSearch }); }} className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown">
                                    <i className="ri-search-line"></i>
                                </button>
                                <div className={this.state.isSearch === true ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"}
                                    aria-labelledby="page-header-search-dropdown">

                                    <Form className="p-3">
                                        <FormGroup className="m-0">
                                            <InputGroup>
                                                <Input type="text" className="form-control" placeholder={this.props.t('Search')} />
                                                <InputGroupAddon addonType="append">
                                                    <Button color="primary" type="submit"><i className="ri-search-line"></i></Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div> */}


                            <ProfileMenu />
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { layoutType } = state.Layout;
    return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(withNamespaces()(Header));
