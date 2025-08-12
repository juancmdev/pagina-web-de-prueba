import React from 'react';

const LogoDX = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" style={{ verticalAlign: 'middle' }}>
        <rect width="40" height="40" rx="8" fill="#fff" />
        <text x="8" y="28" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#222">DX</text>
    </svg>
);

const CartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle' }}>
        <circle cx="9" cy="20" r="2" fill="#fff"/>
        <circle cx="17" cy="20" r="2" fill="#fff"/>
        <path d="M3 4h2l3.6 7.59a1 1 0 0 0 .92.61h7.72a1 1 0 0 0 .92-.61L21 7H7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Header = () => {
    return (
        <header style={{ background: '#222', padding: '1rem 0' }}>
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '900px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <LogoDX />
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
                    <a href="/productos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Productos</a>
                    <a href="/contacto" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</a>
                </div>
                <div>
                    <CartIcon />
                </div>
            </nav>
        </header>
    );
};

export default Header;