import React from 'react';
import { Component } from 'react';
import GreetingsPage from '../greetings/GreetingsPage';
import AboutMePage from '../about-me/AboutMePage';
import TechnologiesPage from '../technologies/TechnologiesPage';
import ProjectsPage from '../projects/ProjectsPage';
import ContactsPage from '../contacts/ContactsPage';
import CircularNavBar from '../../components/circular-navbar/circular-navbar.component.jsx';
import FixBackground from '../../components/fix-background/fix-background.component.jsx';

class MainPage extends Component{

    constructor(props){
        super(props);
        this.mainContactsRef = React.createRef();
        this.mainProfileRef = React.createRef();
        this.mainProjectsRef = React.createRef();
        this.mainTechnologiesRef = React.createRef();

    }

    scrollToProfileRef(ref){
        ref.current.profileRef.current.scrollIntoView({behavior : 'smooth'});
    }
    scrollToTechnologiesRef(ref){
        ref.current.technologiesRef.current.scrollIntoView({behavior : 'smooth'});
    }
    scrollToProjectsRef(ref){
        ref.current.projectsRef.current.scrollIntoView({behavior : 'smooth'});
    }
    scrollToContactsRef(ref){
        ref.current.contactsRef.current.scrollIntoView({behavior : 'smooth'});
    }

    render(){
        return(
            <div className='main-bg'>
                <FixBackground/>
                <GreetingsPage ref={this.mainProfileRef}/>
                <AboutMePage />
                <TechnologiesPage ref={this.mainTechnologiesRef}/>
                <ProjectsPage ref={this.mainProjectsRef}/>
                <ContactsPage ref={this.mainContactsRef}/>
                <CircularNavBar
                    onProfileClick={this.scrollToProfileRef.bind(this, this.mainProfileRef)}
                    onTechnologiesClick={this.scrollToTechnologiesRef.bind(this, this.mainTechnologiesRef)}
                    onProjectsClick={this.scrollToProjectsRef.bind(this, this.mainProjectsRef)}
                    onContactsClick={this.scrollToContactsRef.bind(this, this.mainContactsRef)}/>
            </div>

        )

    }

}
export default MainPage;
