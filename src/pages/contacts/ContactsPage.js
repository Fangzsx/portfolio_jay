import { Component } from 'react';
import Card from '../../components/card/card.component.jsx';
import handshake from '../../assets/images/handshake.gif';
import geoLogo from '../../assets/images/geo-alt.svg';
import emailLogo from '../../assets/images/envelope-at.svg';
import phoneLogo from '../../assets/images/phone-vibrate.svg';
import githubLogo from '../../assets/images/github.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';
import viberLogo from '../../assets/images/viber.svg';
import discordLogo from '../../assets/images/discord.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import openProfileTab from '../../openProfileTab.js';

class ContactsPage extends Component{

    setContactsBody(){
        return(
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <img src={geoLogo} alt='geo.svg'/>
                    <label className='futura-bold text-white mx-1'>Location : Mandaluyong City</label>
                </div>
                <div className='d-flex flex-row'>
                    <img src={emailLogo} alt='envelope-at.svg'/>
                    <label className='futura-bold text-white mx-1'>Email : jaygilbert.garzon@gmail.com</label>
                </div>
                <div className='d-flex flex-row'>
                    <img src={phoneLogo} alt='phone-vibrate.svg'/>
                    <label className='futura-bold text-white mx-1'>Mobile : 09295399252</label>
                </div>
                <label className='futura-bold mt-4'>I'm also available via :</label>
                <div className='d-flex flex-row justify-content-center align-items-center p-4'>
                        <img className='clickable' onClick={ () => openProfileTab('github', 'fangzsx') } src={githubLogo} alt='github.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' onClick={ () => openProfileTab('linkedin', 'jay-gilbert-garzon') } src={linkedinLogo} alt='linkedin.svg' style={{width : '24px', height : '24px', flex : 1}}/>
                        <img className='clickable' onClick={ () => openProfileTab('facebook', 'jygrzn')} src={facebookLogo} alt='facebook.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' onClick={ () => openProfileTab('viber', '09295399252') } src={viberLogo} alt='viber.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' onClick={ () => openProfileTab('discord', 'superjay#2849') } src={discordLogo} alt='discord.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                </div>
            </div>
        )

    }

    render(){
        return (
            <div className='d-flex flex-column vh-100'>
                <div className='one-part'/>
                <div className='one-part d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-row black-outline mb-4'>
                        <label className='futura-bold fs-1 white-text'>Let's help</label>
                        <label className='futura-bold fs-1 text-teal mx-2'>each other!</label>
                        <img src={handshake} width='48px' alt='handshake.gif'/>
                    </div>
                    <Card 
                        title='contacts.html'
                        body={this.setContactsBody()}/>
                </div>
                <div className='one-part'/>
            </div>
        )
    }

}
export default ContactsPage;
