import Card from '../../components/Card/Card.jsx'
import './AboutMe.css'
function AboutMe() {
    return (
        <>
            <div className="flex gap-x-2.5 lg:flex-row flex-col justify-center">
                {/* <div className="about-me xl:w-2/3"> */}
                <Card title='About me'>
                    <div>
                        <div className='lg:text-lg'>
                            <div className='text-justify'>
                                <p className='indent-8'>A graduate from Cavite State University with a
                                    <span className="text-orange-600 dark:text-orange-200"> Bachelor of Science in Information Technology. </span>
                                    Knowledgeable in computer hardware, software and networking.
                                </p>
                                <br />
                                <p className='indent-8'>
                                    I have a strong interest about technology and interested to work in an environment where I can apply and enhance my Knowledge about technology
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
                {/* </div> */}

                {/* <div className="background xl:w-1/3"> */}
                <Card title="Educational Background">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 text-start">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="lg:text-lg font-semibold text-gray-900 dark:text-white">Cavite State University Silang Campus </h3>


                            <div className="lg:text-md text-sm">
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">College</p>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bachelors of Science in Information Technology</p>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
                            </div>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute mt-1.5 w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="lg:text-lg font-semibold text-gray-900 dark:text-white">National College of Science and Technology Institute of Industrial Research and Training</h3>
                            <div className="lg:text-md text-xs">
                                <p className="text-md text-base font-normal text-gray-500 dark:text-gray-400">Senior Highschool</p>
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