import React from 'react';
import '../css/styles.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

export default function Home() {

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            
            <Navbar />
        </div>
    )
}