import '../resume.css';


function Header() {
    return (
        <header>
            <p className='text-header'>My Profile</p>
        </header>
    );
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
                            <img className='icon-img' src="src\github.png" alt='github icon' >
                                </img>
                                </button>
                    </a>
                    <a href='https://www.linkedin.com/in/kraiyos-wanna/'>
                        <button  >
                            <img className='icon-img' src="src\linkin.png" alt='LinkIn icon' >
                                </img>
                                </button>
                    </a>
                    <Alert>
                    GG<button><img className='icon-img' src="src\email.png" alt='email icon'></img></button></Alert>
                    <img className='icon-img' src="src\phone.png" alt='phone icon'></img>
                </div>
            </div>
        </div>
    );
}




export default Header;