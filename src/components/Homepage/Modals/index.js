import React from 'react'
import Languages from './Languages';
import Login from './Login';
import Join from './Join';

export default function index() {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40" />
            <Languages />
        </div>
    )
}
