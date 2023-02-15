import { Component } from 'react';
import ImageFrame from '../../components/image-frame/image-frame.component.jsx';
import MyProfile from '../../assets/images/jay.jpg';
import Card from '../../components/card/card.component.jsx';
import Pill from '../../components/pill/pill.component.jsx';
import globeLogo from '../../assets/images/globe.svg';
import phoneLogo from '../../assets/images/phone.svg';

class AboutMePage extends Component {

    setExperiencesBody(){
        return (
            <div className='d-flex flex-column mb-4'>
                <div className='d-flex flex-row'>
                    <label className='fs-2 text-teal futura-bold'>Exp</label>
                    <label className='fs-2 white-text futura-bold'>eriences</label>
                </div>
                <div className='d-flex flex-row justify-content-center align-items-center mt-4'>
                    <div className='d-flex flex-column rounded square justify-content-center align-items-center'>
                        <img className='icon' src={globeLogo} alt='globe.svg'/>
                        <label className='futura-bold text-center mt-3 fs-xs'>7 Months as Web Developer (MERN)</label>
                    </div>
                    <div className='d-flex flex-column rounded square justify-content-center align-items-center ms-4'>
                        <img className='icon' src={phoneLogo} alt='phone.svg'/>
                        <label className='futura-bold text-center mt-3 fs-xs'>2 Years as Android Developer (Kotlin)</label>
                    </div>
                </div>
            </div>
        )
    }

    setSkillsBody(){
        return (
            <div className='d-flex flex-column p-2'>
                <div className='d-flex flex-row'>
                    <label className='fs-2 text-teal futura-bold'>Sk</label>
                    <label className='fs-2 white-text futura-bold'>ills</label>
                </div>
                <Pill text='System Analyzation (Business Flow, DFD, ERD)'/>
                <Pill text='Experience in Backend and Frontend Development'/>
                <Pill text='Github Version Control (Forking, Branching, PR)'/>
                <Pill text='Discussing and Gathering Requirements from Clients'/> 
                <Pill text='System Documentation (User Manual, Use Cases etc)'/> 
                <Pill text='Collaborating with team to provide Maximum Output'/> 
            </div>

        )

    }

    render(){
        return(
            <div className='d-flex flex-column'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-row' style={{marginBottom : 40}}>
                        <label className='fs-1 ms-4 futura-bold text-teal black-outline'>About</label>
                        <label className='fs-1 futura-bold white-text mx-2 black-outline'>Me</label>
                    </div>
                    <ImageFrame className='mt-4'src={MyProfile} />
                    <div>
                    </div>

                </div>
                <div className='d-flex flex-row justify-content-center align-items-center' style={{marginTop:'100px'}}>
                    <Card title ='experiences.html'
                          body={this.setExperiencesBody()}/>
                </div>

                <div className='d-flex flex-row justify-content-center align-items-center' style={{marginTop:'100px'}}>
                    <Card title ='skills.html'
                          body={this.setSkillsBody()}/>
                </div>
            </div>
        )

    }
}
export default AboutMePage;
