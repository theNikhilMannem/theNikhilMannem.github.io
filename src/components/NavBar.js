import React from 'react';

const navStyles = {
    backgroundColor: "teal",
    fontFamily: "Cursive",
    fontStyle: 'italic',
};

const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    padding: '1em',
};

export default function NavBar(props) {
    const links = props.links;
    return (
        <nav style={navStyles}>
            {
                links ?
                links.map(link => (
                    <a href={link.href} style={linkStyles} > { link.name } </a>
                ))
                :
                ''
            }
        </nav>
    );
}

/*
    Usage: Pass an array of objetcs which contain 'name' and 'href' (in that order) for the link you're intending to add.
*/