import React from 'react';
import { HeaderProps} from '../utils/props';

function Header(props: HeaderProps){
    const toggle_nav = props.toggle_nav;
    return (
        <div>
            <button className="fixed header" onClick = {toggle_nav}> Nav </button>
        </div>
    );
}
export default Header;