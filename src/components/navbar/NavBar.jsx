import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Icon, Image, Menu } from 'semantic-ui-react';


const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={Link} to='/'>
                    <Icon name='spy'/>
                    Baenares Institute
                </Menu.Item>
                <Menu.Item>
                    <Dropdown pointing='top left' text='Resources'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Students' icon='student' as={Link} to='/students'/>
                            <Dropdown.Item text='Courses' icon='archive' as={Link} to='/courses'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown pointing='top left' text='Enrollment'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='New enrollment' icon='user md' as={Link} to='/enrollment'/>
                            <Dropdown.Item text='Enrollment list' icon='clipboard list' as={Link} to='/enrollmentList'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item pointing='right'>
                    <Image avatar spaced='right' src='/assets/user.png'/>
                    <Dropdown pointing='top left' text='currentUsername'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='logout' icon='log out' onClick={() => console.log('logout ')}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar;
