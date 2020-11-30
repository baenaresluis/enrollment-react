import React from 'react';
import {Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Icon name='spy' /> Baenares Institute
                </Header>
                <Header 
                    as='h2' 
                    inverted 
                    content='Welcome to the Baenares Institute'
                />
                <Button 
                    size='huge'
                    content='Go to courses' 
                    inverted 
                    as={Link}
                    to='/courses'
                />
                <Header 
                    as='h2' 
                    inverted 
                    content='Welcome to Baenares Institute'
                />
                <Button 
                    size='huge' 
                    inverted 
                    content='Login' 
                    onClick={() => console.log('Open Login Form')}
                />
            </Container>
        </Segment>
    );
};

export default HomePage;