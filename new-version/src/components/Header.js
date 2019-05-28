import React from 'react'

import Footer from './footer'
import SafeLink from './safeLink';
import avatar from '../assets/images/michalczukm.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#header" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Hi, I am <strong>Michał Michalczuk</strong></h1>
                    <h2>I build web, I speak about web</h2>
                    <h3>Strongly web oriented Full-Stack developer and <SafeLink href="https://infoshareacademy.com/">IT&nbsp;trainer</SafeLink></h3>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
