/* eslint-disable react/prop-types */
import './Nav.css';

function Link({url, children}){
    return <>
        <li><a href={url}>{children}</a></li>
    </>
}

export default Link;