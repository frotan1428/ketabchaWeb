
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const  NavBar =() =>{
  return (
    <Navbar bg="light" expand="sm" variant='info' className='mt-auto'> 
      <Container fluid>
        <Navbar.Brand href="#">ketabche</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-lg-2 m-1 py-0"
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
            <NavDropdown title="Master" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/">Country</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/city">City</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/Currency">Currency</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/CurrencyRelation">Currency-relation</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Company" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/branch">Branch</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/capital">Capital</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/company-profile">compmany-profile</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/fiscal-year">fiscal-year</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/good-will">good-will</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/todo-list">todo-list</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/user">user</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/role">Role</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Customer" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/new-customer">new customer</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/balance-sheet">balance-sheet</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/balance-transfer">balance-transfer</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/discount">disccount</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/opening-balance">opening-balance</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/statements">Satements</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/Vouncher">Vouncher</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Hawala" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/hawala-procces">Hawala-proccess</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/hawala-list">Hawala-List</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/hawala-voucher">Hawala-vouncher</NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/account-Balance">Account-Balance</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/account-Statements">Account-Statements</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/exchnage-voucher">Exchnage-Voucher</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/new-account">New Account</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Expense" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/expense-invoice">Expense-Invoice</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Employee" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/pay-roll">Pay-Roll</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Report" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/branch-balance">Branch-Balance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/branch-statements">Branch-Statements</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company-balnce">Company-Balance-Sheet</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/daily-report">Dail-Reoprt</NavDropdown.Item>
            </NavDropdown>


         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;