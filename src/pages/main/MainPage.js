import { Component } from 'react';
import GreetingsPage from '../greetings/GreetingsPage';
import AboutMePage from '../about-me/AboutMePage';
import ProjectsPage from '../projects/ProjectsPage';
import TechnologiesPage from '../technologies/TechnologiesPage';
import CircularNavBar from '../../components/circular-navbar/circular-navbar.component.jsx';
import FixBackground from '../../components/fix-background/fix-background.component.jsx';

class MainPage extends Component{

    render(){
        return(
            <div className='main-bg'>
                <FixBackground/>
                <GreetingsPage/>
                <AboutMePage/>
                <TechnologiesPage/>
                <ProjectsPage/>
                <CircularNavBar/>
            </div>

        )

    }

}
export default MainPage;
