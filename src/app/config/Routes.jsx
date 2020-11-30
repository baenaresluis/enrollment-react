import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBar from '../../components/navbar/NavBar';

import Courses from '../../pages/courses/Courses';
import HomePage from '../../pages/home/HomePage';
import Students from '../../pages/students/Students';
import Enrollment from '../../pages/enrollment/Enrollment';
import EnrollmentList from '../../pages/enrollment/EnrollmentList';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={HomePage}/>
            <Route 
                path='/(.+)' 
                render={() => (
                    <>
                        <NavBar/>
                        <Container style={{ marginTop: '7em' }}>
                            <Switch>
                                <Route exact path='/' component={HomePage}/>
                                <Route path='/students' component={Students}/>
                                <Route path='/courses' component={Courses}/>
                                <Route path='/enrollment' component={Enrollment}/>
                                <Route path='/enrollmentList' component={EnrollmentList}/>
                            </Switch>
                        </Container>
                    </>
                )}
            />
        </>
    );
};

export default Routes;
