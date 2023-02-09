import { Component } from 'react';
import GreetingsPage from '../greetings/GreetingsPage';
import AboutMePage from '../about-me/AboutMePage';
import TechnologiesPage from '../technologies/TechnologiesPage';
import ProjectsPage from '../projects/ProjectsPage';
import ContactsPage from '../contacts/ContactsPage';
import CircularNavBar from '../../components/circular-navbar/circular-navbar.component.jsx';
import FixBackground from '../../components/fix-background/fix-background.component.jsx';

class MainPage extends Component{

    render(){
        return(
            <div className='main-bg'>
                <GreetingsPage />
                <AboutMePage />
                <TechnologiesPage />
                <ProjectsPage />
                <ContactsPage />
                <CircularNavBar/>
                <FixBackground />
            </div>

        )

    }

}
export default MainPage;
