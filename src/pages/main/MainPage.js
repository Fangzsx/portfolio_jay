import { Component } from 'react';
import GreetingsPage from '../greetings/GreetingsPage';

class MainPage extends Component{

    render(){
        return(
            <div className='main-bg vh-100'>
                <GreetingsPage/>
                <GreetingsPage/>
                <GreetingsPage/>
            </div>

        )

    }

}
export default MainPage;
