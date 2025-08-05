import Card from '../../components/Card/Card.jsx'
import './AboutMe.css'
function AboutMe() {
    return (
        <>
            <div className="flex gap-x-2.5 lg:flex-row flex-col justify-center md:px-30">
                <div className="about-me xl:w-2/3">
                    <Card title='About me'>
                        <div>
                            <div className='lg:text-xl text-lg'>
                                <div className='text-justify'>
                                    <p className='indent-8'>A soon-to-be graduate of Cavite State University with a
                                        <span className="text-orange-600 dark:text-orange-200"> Bachelor of Science in Information Technology. </span>
                                        Knowledgeable in networking, computer hardware, and software.
                                    </p>
                                    <br />
                                    <p className='indent-8'>
                                        I have a strong interest about technology and interested to work in an environment where I can apply and enhance my Knowledge about technology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="background xl:w-1/3">
                    <Card title="Educational Background">
                        <ol class="relative border-s border-gray-200 dark:border-gray-700 text-start">
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 class="lg:text-lg font-semibold text-gray-900 dark:text-white">Cavite State University Silang Campus </h3>


                                <div className="lg:text-md text-sm">
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">College</p>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Bachelors of Science in Information Technology</p>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
                                </div>
                            </li>
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 class="lg:text-lg font-semibold text-gray-900 dark:text-white">National College of Science and Technology Institute of Industrial Research and Training</h3>
                                <div className="lg:text-md text-xs">
                                    <p class="text-md text-base font-normal text-gray-500 dark:text-gray-400">Senior Highschool</p>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Technical Vocational Livelihood - Computer System Servicing</p>
                                    <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2021</time>
                                </div>
                            </li>

                        </ol>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default AboutMe;