import React from 'react';

const Header = () => {
    return (
        <header style={{ background: '#222', padding: '1rem 0' }}>
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
                <a href="/productos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Productos</a>
                <a href="/contacto" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</a>
            </nav>
        </header>
    );
};

export default Header;