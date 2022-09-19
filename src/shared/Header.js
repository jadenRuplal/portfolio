import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'White',
    textDecoration: 'none',
	fontSize: '30px',

}


const authenticatedOptions = () => (
	<>
		<Nav.Link className='m-1' style={{padding: '8px',}}>
			<Link to='/cars' style={linkStyle}>
				Carbid
			</Link>
		</Nav.Link>
		<Nav.Item className='m-1' style={{padding: '8px',}}>
			<Link to='myCars' style={linkStyle}>
				My listings
			</Link>
		</Nav.Item>
		<Nav.Link className='m-1' style={{padding: '8px',}}>
			<Link to='/bids' style={linkStyle}>
				My bid
			</Link>
		</Nav.Link>
		<Nav.Item className='m-1' style={{padding: '8px',}}>
			<Link to='addCar' style={linkStyle}>
				Add listing
			</Link>
		</Nav.Item>


		
	</>
)







const Header = () => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{authenticatedOptions()}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
