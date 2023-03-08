import React from 'react';
import '../resume.css';

function EducationProfile(){
    return(
        <div className='technical-profile'>
            <h1 className='text-introduction'>My Technical Skills</h1>
            <div className='technical-details'>
                <img className='logo-technical-skills' src='src\Picture\JS6.png'></img>
                <img className='logo-technical-skills' src='src\Picture\nodejs.png'></img>
                <img className='logo-technical-skills' src='src\Picture\HTML5.png'></img>
                <img className='logo-technical-skills' src='src\Picture\CSS3.png'></img>
                <img className='logo-technical-skills' src='src\Picture\python logo.png'></img>
                <img className='logo-technical-skills' src='src\Picture\django.png'></img>
                
            </div>
        </div>
    );
}

export default EducationProfile;