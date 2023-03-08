import React from 'react';
import '../resume.css';

function Footer(){
    return(
        <footer>
            <h1 className='text-normal'>📧 kraiyos.wanna@gmail.com </h1>
            <h1 className='text-normal'>@ Copyright 2023 | Skynet </h1>
                <div>
                    <a href='https://github.com/KraiyosW'>
                                <button >
                                    <img className='icon-img' src="public\assets\Picture\github.png" alt='github icon' >
                                        </img>
                                        </button>
                            </a>
                            <a href='https://www.linkedin.com/in/kraiyos-wanna/'>
                                <button >
                                    <img className='icon-img' src="public\assets\Picture\linkin.png" alt='LinkIn icon' >
                                        </img>
                                        </button>
                            </a>
                </div>
        </footer>
    );
}

export default Footer;