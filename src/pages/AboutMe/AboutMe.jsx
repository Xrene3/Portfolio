import Card from '../../components/Card/Card.jsx'
import './AboutMe.css'
import { intlFormatDistance, format, formatDistance, subDays } from 'date-fns'
const dateNow = new Date()
const graduateDate = format(new Date(2025, 8, 24), "MM/dd/yyyy");
const diffDays = intlFormatDistance(graduateDate, dateNow);
function AboutMe() {
    console.log(diffDays)
    return (
        <>
            <div className="flex gap-5 lg:flex-row flex-col justify-center">
                {/* <div className="about-me xl:w-2/3"> */}
                <Card title='About me'>
                    <div>
                        <div className='lg:text-lg text-md'>
                            <div className='text-justify'>
                                <p className='indent-8'> 
                                    I'm Ryan Clark Geneveo, Junior Fullstack Developer with experience in building smooth, modern and responsive websites. 
                                    Aside from web development, I also know how to troubleshoot computer hardware and sofware, OS installation, and basic networking. 
                                    I also like trying out other technologies for example, I'm currently learning about Linux, Docker and Virtualization
                                </p>
                                <br />
                                <p className='indent-8'>
                                    Graduate of 
                                    <span className="text-orange-600 dark:text-orange-200"> Bachelor of Science in Information Technology (BSIT) </span>
                                    at Cavite State University - Silang Campus 
                                    <br />
                                    <i className="text-sm"><span> Graduated on September 24, 2025 ( {diffDays} )</span></i>
                                </p>
                                <br />
                                <p className="indent-8"><strong>More about me: </strong>I enjoy tinkering with computers, watching anime, playing video games and drawing. I've done some sketches and digital art before.</p>
                            </div>
                        </div>
                    </div>
                </Card>
                {/* </div> */}

                {/* <div className="background xl:w-1/3"> */}
                <Card title="Educational Background">
                    <ol className="relative border-s border-gray-300 dark:border-gray-700 text-start">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="lg:text-lg font-semibold text-gray-900 dark:text-white">Cavite State University Silang Campus </h3>


                            <div className="lg:text-md text-sm">
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">College | BSIT</p>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bachelors of Science in Information Technology</p>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
                            </div>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute mt-1.5 w-3 h-3 bg-gray-400 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="lg:text-lg font-semibold text-gray-900 dark:text-white">National College of Science and Technology Institute of Industrial Research and Training</h3>
                            <div className="lg:text-md text-xs">
                                <p className="text-md text-base font-normal text-gray-500 dark:text-gray-400">Senior Highschool | TVL</p>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Technical Vocational Livelihood - Computer System Servicing</p>
                                <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2021</time>
                            </div>
                        </li>

                    </ol>
                </Card>
                {/* </div> */}
            </div>
        </>
    )
}

export default AboutMe;