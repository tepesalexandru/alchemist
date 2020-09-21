import React from 'react'
import Languages from './Languages';
import Login from './Login';
import Join from './Join';
import { connect } from 'react-redux';
import Mobile from './Mobile';

function Modals({showBG}) {

    if (showBG === false) return null;

    return (
        <div>
            
            <Languages />
            <Mobile />
            <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 opacity-100 pointer-events-none transition duration-150 cursor-pointer" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showBG: state.ui.showBackground
    }
}

export default connect(mapStateToProps)(Modals);