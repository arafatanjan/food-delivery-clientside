import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavLink } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import './Header.css';
import Usefirebase from '../../Hook/Usefirebase';


const Header = () => {
    // const { user, logout } = Usefirebase();
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <Navbar sticky='top' bg="light" variant="light" collapseOnSelect expand="lg" className="me-auto ">
                <Container>
                    <Navbar.Brand href="#home" className='text-dark'>Food Delivery</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/home#home" className='text-dark'>Home</NavLink>
                            <NavLink as={Link} to="/home#services" className='text-dark'>Services</NavLink>

                            {/* <NavLink as={Link} to="/warranty">Warranty</NavLink> */}
                            {/* <Link to="/">Home</Link> */}
                            <Link to="/users">My Orders</Link>
                            {/* <Link to="/manageServices">New Service</Link> */}
                            {user?.displayName ?
                                <Link to="/orders/update/:id">Manage All Orders</Link>
                                :
                                <NavLink as={Link} to=""></NavLink>
                            }
                            {user?.displayName ?
                                <NavLink as={Link} to="/addservice">Add Service</NavLink>
                                :
                                <NavLink as={Link} to=""></NavLink>
                            }

                            {user?.displayName ?
                                <NavLink> <button onClick={logout} variant="light" className='btn btn-light tex-black text-decoration-none mt-0 pt-0'>Logout</button></NavLink> :
                                <NavLink as={Link} to="/loggedin">Log in</NavLink>
                            }
                        </Nav>
                        <Navbar.Text className='strong'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );
};

export default Header;