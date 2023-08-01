import './Skills.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <main>
            <div>
                <div className='sectionHeader'>
                    Skills
                </div>
                <div className='skillsAndFrameWorks'>
                    <div className='skillsCard languages'>
                        <div className='title'>
                            Languages
                        </div>
                        <div className='imageRow'>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/typeScriptLogo.png"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                                <div className='skillName'>TypeScript</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/javaScriptLogo.png"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                                <div className='skillName'>JavaScript</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/htmlLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>HTML</div>
                            </div>
                        </div>
                        <div className='imageRow'>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/cssLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>CSS</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/sqlLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>SQL</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/javaLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>Java</div>
                            </div>
                        </div>
                        <div className='imageRow'>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/pythonLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>Python</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/cLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>C</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/cSharpLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>C#</div>
                            </div>
                        </div>
                        <div className='imageRow'>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/rustLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>Rust</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/swiftLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>Swift</div>
                            </div>
                        </div>
                    </div>
                    <div className='skillsCard'>
                        <div className='title'>
                            Technologies and Frameworks
                        </div>
                        <div className='imageRow'>
                            <div className='skillContainer'>
                                <div className='skillImageContainer'>
                                    <Image
                                        src="/assets/vueLogo.png"
                                        width={80}
                                        height={80}
                                        className='skillImage'
                                        alt=""
                                    />
                                </div>
                                <div className='skillName'>Vue</div>
                            </div>
                            <div className='skillContainer'>
                                <Image
                                    src="/assets/angularLogo.png"
                                    width={80}
                                    height={80}
                                    className='skillImage'
                                    alt=""
                                />
                                <div className='skillName'>Angular</div>
                            </div>
                            <div className='skillContainer'>
                                <div className='skillImageContainer'>
                                    <Image
                                        src="/assets/reactLogo.png"
                                        width={80}
                                        height={80}
                                        className='skillImage'
                                        alt=""
                                    />
                                </div>
                                <div className='skillName'>React</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}