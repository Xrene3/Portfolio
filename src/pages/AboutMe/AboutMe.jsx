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
                                <p className='indent-8'>Hi! My name is Ryan Clark M. Geneveo, I studied
                                    <span className="text-orange-600 dark:text-orange-200"> Bachelor of Science in Information Technology. </span>
                                    at Cavite State University - Silang Campus. I'm familiar with computer hardware, software and networking.
                                </p>
                                <p className="text-sm my-2 text-neutral-600 dark:text-neutral-300">On set to graduate <span className="text-orange-600 dark:text-lime-200 underline">{diffDays}</span> | September 24, 2025</p>
                                {/* <p className='indent-8'>I have a strong interest about technology and interested to work in an environment where I can apply and enhance my Knowledge about technology.</p>
                                <p className="indent-8">I'm currently pursuing Web Develolopment and have made some projects before.</p> */}
                                <p className="indent-8">I've been pursuing a career in the field of web development and have been enjoying it lately,
                                    continuously trying out different technologies and programming style that I haven't tried / explored before.</p>
                                <br />
                                <p className="indent-8"><strong>More about me: </strong>I enjoy watching anime, playing video games and drawing. I've done some sketches and digital art before.</p>
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