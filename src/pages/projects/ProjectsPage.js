import { Component } from 'react';
import Card from '../../components/card/card.component.jsx';
import CardSmall from '../../components/card-small/card-small.component.jsx';
import mercantileLogo from '../../assets/images/mercantile.png';
import figaroLogo from '../../assets/images/figaro.png';
import sushiLogo from '../../assets/images/sushi.png';
import aparLogo from '../../assets/images/apar.png';
import newsLogo from '../../assets/images/news.png';
import animuLogo from '../../assets/images/animu.png';
import mealLogo from '../../assets/images/dish.png';
import todoLogo from '../../assets/images/todo.png';
import cocktailLogo from '../../assets/images/cocktail.png';
import { Modal } from 'react-bootstrap';
import Carousel from '../../components/carousel/carousel.component.jsx';


class ProjectsPage extends Component {

    constructor(){
        super();
        this.state = { app : { name : '', showModal : false } };
    }

    showModal(name){
        this.setState({ app : { name : name, showModal : true }});
    }

    hideModal(){
        this.setState({ app : { name : '', showModal : false} });
    }

    setInsuranceAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <img className='mt-2' src={mercantileLogo} alt='mercantile.png' style={{width : '60px'}}/>
            </div>
        )
    }


    setFigaroAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <img className='mt-3' src={figaroLogo} alt='figaro.png' style={{width : '80px'}}/>
            </div>
        )
    }


    setSushiAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <img className='mt-4' src={sushiLogo} alt='sushi.png'style={{width : '80px'}} />
            </div>
        )
    }


    setWebProjectsBody(){
        return(
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center'>
                <div className='d-flex flex-row flex-wrap justify-content-center align-items-center'>
                    <CardSmall 
                        label='Insurance App'
                        onClick={this.showModal.bind(this, 'Mercantile Insurance')}
                        body={this.setInsuranceAppBody()}
                        />

                    <CardSmall 
                        label='E-learning App'
                        onClick={this.showModal.bind(this, 'Sushi Learning Academy')}
                        body={this.setSushiAppBody()}/>

                    <CardSmall 
                        label='Live Chat Support and Ticketing System'
                        onClick={this.showModal.bind(this, 'Figaro Coffee Group')}
                        body={this.setFigaroAppBody()}/>
                </div>
            </div>
        )

    }


    setAparAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <img src={aparLogo} alt='apar.png' style={{width : '50px'}}/>
            </div>
        )
    }

    setAnimeAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <img src={animuLogo} alt='animu.png' style={{width : '50px'}}/>
            </div>
        )
    }
    setNewsAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <img src={newsLogo} alt='news.png' style={{width : '50px'}}/>
            </div>
        )
    }
    setCocktailAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <img src={cocktailLogo} alt='cocktail.png' style={{width : '50px'}}/>
            </div>
        )
    }
    setTodoAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <img src={todoLogo} alt='todo.png' style={{width : '50px'}}/>
            </div>
        )
    }
    setMealAppBody(){
        return (
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <img src={mealLogo} alt='meal.png' style={{width : '50px'}}/>
            </div>
        )
    }
    setAndroidProjectsBody(){
        return(
            <div className='d-flex'>
                <div className='d-flex flex-row flex-wrap justify-content-center align-items-center'>
                    <CardSmall 
                        label='APAR App'
                        onClick={this.showModal.bind(this, 'APAR App')}
                        body={this.setAparAppBody()}
                        />

                    <CardSmall 
                        label='Anime App'
                        onClick={this.showModal.bind(this, 'Animu DB')}
                        body={this.setAnimeAppBody()}/>

                    <CardSmall 
                        label='News App'
                        onClick={this.showModal.bind(this, 'News App')}
                        body={this.setNewsAppBody()}/>
                    <CardSmall 
                        label='Cocktail App'
                        onClick={this.showModal.bind(this, 'Cocktail DB')}
                        body={this.setCocktailAppBody()}
                        />

                    <CardSmall 
                        label='Meal App'
                        onClick={this.showModal.bind(this, 'Meal DB')}
                        body={this.setMealAppBody()}/>

                    <CardSmall 
                        label='Todo App'
                        onClick={this.showModal.bind(this, 'Todo App')}
                        body={this.setTodoAppBody()}/>
                </div>

                
            </div>
        )

    }

    render(){
        const { app } = this.state;
        return(
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-row black-outline'>
                    <label className='futura-bold fs-1 text-teal'>Pro</label>
                    <label className='futura-bold fs-1 white-text'>jects</label>
                </div>
                <Modal
                    size='lg'
                    show={app.showModal} 
                    onHide={this.hideModal.bind(this)}
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{app.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel/>
                    </Modal.Body>
                </Modal>
                <div className='mt-4'>
                    <Card 
                        title='web_projects.html'
                        body={this.setWebProjectsBody()}/>
                </div>

                <div className='mt-4'>
                    <Card 
                        title='android_projects.html'
                        body={this.setAndroidProjectsBody()}/>
                </div>
            </div>
        )
    }
}
export default ProjectsPage;
