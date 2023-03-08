import React from 'react';
import '../resume.css';


function Header() {
    return (
        <header>
            <p className='text-header'>My Profile</p>
        </header>
    );
}
function handleClickEmail() {
    
     window.alert('My Email : kraiyos.wanna@gmail.com')
  }
function handleClickPhone() {
    
    window.alert('My Phone : (+66) 99 149 9425')
 }
export function Introduction(){
    return(
        <div className='introduction'>
            <div className='left-introduction'>
                <p className='text-hello'>Hi!</p>
                <h1 className='text-introduction'>I'm Kraiyos Wanna. <br/> a Full-Stack Developer.</h1>
                <h1 className='text-information'>Hello, my name is Kraiyos Wanna. I am currently studying at TechUp Bootcamp to switch careers and become a software developer. The reason why I want to become a programmer is that I enjoy problem-solving and creating new things. I also fell in love with programming. Please give me a chance, and I will not disappoint you.</h1>
                <div className='contect'>
                    <p className='text-normal'>Follow me : </p>
                    <a href='https://github.com/KraiyosW'>
                        <button >
                            <img className='icon-img' src="public\Picture\github.png" alt='github icon' >
                                </img>
                                </button>
                    </a>
                    <a href='https://www.linkedin.com/in/kraiyos-wanna/'>
                        <button >
                            <img className='icon-img' src="public\Picture\linkin.png" alt='LinkIn icon' >
                                </img>
                                </button>
                    </a>
                    <button onClick={handleClickEmail}>
                        <img className="icon-img" src="public\Picture\email.png" alt="Email icon" />
                    </button>
                    <button onClick={handleClickPhone}>
                        <img className="icon-img" src="public\Picture\phone.png" alt="Phone icon" />
                    </button>
                </div>
                <div className='bt-group'>
                    <button className='bt-sendrequest'>Send Request</button>
                    <button className='bt-downloadCV'>Download CV</button>
                </div>
            </div>
            
            <div className='right-introduction'>
                <div className='background-picture'>
                    <img className='picture-profile' src="https://drive.google.com/file/d/1l5i0CdxPaNwdP_kvK9QoRs0PIB5UOG2V/view?usp=share_link" alt="picturn profile"></img>
                    <img className='bullet-point1' src="public\Picture\Bullet Points1.png" alt ="Bullet background"></img>
                    <img className='bullet-point2' src="public\Picture\Bullet Points1.png" alt ="Bullet background"></img>
                </div>
            </div>
         </div>
    );
}




export default Header;