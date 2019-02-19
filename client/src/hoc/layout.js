import React, { Component } from 'react';

import Header from '../component/Header_footer/Header/index';
import Footer from '../component/Header_footer/Footer/index';

class Layout extends Component{
    render() {
        return (
            <div>
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout;