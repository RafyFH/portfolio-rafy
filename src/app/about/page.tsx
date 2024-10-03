"use client"
import HeaderTitle from "@/app/components/HeaderTitle";
import Text from "@/app/components/Text";
import SubHeader from "@/app/components/SubHeader";
import profileIMG from "../assets/20240917_103609.jpg"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiAngular, SiTailwindcss, SiBootstrap, SiLaravel, SiMysql, SiPostgresql, SiTypescript, SiCsharp, SiExpress } from 'react-icons/si';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const workExperienceRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Stop observing after it becomes visible
            }
        });

        if (workExperienceRef.current) {
            observer.observe(workExperienceRef.current);
        }

        return () => {
            if (workExperienceRef.current) {
                observer.unobserve(workExperienceRef.current);
            }
        };
    }, []);
    return (
        <section id="about" className="min-h-screen">
            {/* Header Title at the top */}
            <HeaderTitle title="I'm Rafy"/>

            {/* Main content after HeaderTitle */}
            <div
                className="flex flex-col md:flex-row items-center justify-center w-full pb-10 px-8 z-10 text-[60px]">
                <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
                    <Image
                        className="rounded-t-full w-[300px] h-[350px] object-cover"
                        src={profileIMG}
                        alt="Profile Image"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <SubHeader
                        title="I'm a Front End & Fullstack Developer working from 35°C Bandung, West Java, Indonesia."/>
                    <div className={`mt-8 flex-col space-y-5`}>
                        <Text text="
                        Over the past six years, I have gained experience in various areas of web development, including front-end and full-stack development. I have expertise in creating responsive and visually appealing user interfaces, as well as managing backend logic to ensure smooth application performance."/>

                        <Text
                            text="Currently, I focus on front-end and full-stack development using JavaScript and related technologies such as React and Node.js. I always strive to stay updated with the latest trends in web technology and contribute to innovative projects."/>
                    </div>
                </div>
            </div>
            <section
                ref={workExperienceRef}
                className="min-h-screen flex flex-col items-center justify-center w-full md:px-28 px-10 z-10 mt-20 text-[60px] space-y-6 font-firasans transition-opacity duration-1000 ease-in-out">
                <SubHeader
                    className={`text-3xl mb-4 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    title={`Work Experience`}/>
                <div
                    className={`p-14 bg-blue-950 z-[-2] rounded-[20px] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative">
                        {/* Garis vertikal */}
                        <div className="absolute left-4 h-full w-[1px] bg-blue-600 z-[1]"></div>

                        {/* Pengalaman Kerja 1 */}
                        <div className="relative">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                                <div className="font-bold text-2xl">Mid To Senior Frontend Developer</div>
                                <div className="font-bold text-xl text-gray-400"> Full Time (2021 - Present)</div>
                                <div className="font-medium text-lg">PT. Rastek Inovasi Digital</div>
                                <div className="font-bold text-lg text-gray-400 mt-3">Developed and maintained
                                    user-facing
                                    features using React.js, ASP.Net, and Laravel. Built reusable components and
                                    front-end libraries for future use. Translated designs and wireframes into
                                    high-quality code. Optimized components for maximum performance across a vast array
                                    of web-capable devices and browsers. Collaborated with back-end developers and web
                                    designers to improve usability. Ensured the technical feasibility of UI/UX designs.
                                    Participated in code reviews and provided constructive feedback to peers. Stayed
                                    up-to-date with the latest industry trends and technologies to ensure applications
                                    are built using best practices. Used Git for version control to manage and
                                    collaborate on code with team members. Mentored new hires by teaching them the
                                    fundamentals of React.js and guiding them through the onboarding process.
                                </div>

                            </div>
                        </div>
                        <div className="relative mt-[20px]">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                                <div className="font-bold text-2xl">Fullstack Developer</div>
                                <div className="font-bold text-xl text-gray-400"> Freelance (Juli - Aug 2023)</div>
                                <div className="font-medium text-lg">Siemro</div>
                                <div className="font-bold text-lg text-gray-400 mt-3">Developed and maintained a
                                    web-based application for eye testing using Laravel. Designed and implemented the
                                    front-end and back-end architecture of the application. Created and managed the
                                    database schema to store test results and user information. Developed user-friendly
                                    interfaces to ensure a seamless user experience. Implemented authentication and
                                    authorization mechanisms to secure user data. Integrated various APIs to enhance the
                                    functionality of the application. Conducted thorough testing and debugging to ensure
                                    the application’s reliability and performance. Collaborated with clients to
                                    understand their requirements and provide regular updates on project progress.
                                    Utilized Git for version control to manage and collaborate on the codebase.
                                </div>

                            </div>
                        </div>


                        <div className="relative mt-[20px]">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                                <div className="font-bold text-2xl">Fullstack Developer</div>
                                <div className="font-bold text-xl text-gray-400"> Freelance (Jul - Aug 2023)</div>
                                <div className="font-medium text-lg">Sinar Eka Selaras</div>
                                <div className="font-bold text-lg text-gray-400 mt-3">Developed and maintained a content
                                    management system (CMS) using Laravel and Tailwind CSS. Designed and implemented the
                                    front-end and back-end architecture of the CMS. Created and managed the database
                                    schema to store content and user information. Developed user-friendly interfaces and
                                    administrative panels to manage content efficiently using Tailwind CSS. Conducted
                                    thorough testing and debugging to ensure the CMS’s reliability and performance.
                                    Collaborated with stakeholders to gather requirements and provide regular updates on
                                    project progress. Utilized Git for version control to manage and collaborate on the
                                    codebase.
                                </div>

                            </div>
                        </div>
                        <div className="relative mt-[20px]">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                                <div className="font-bold text-2xl">Fullstack Developer</div>
                                <div className="font-bold text-xl text-gray-400"> Freelance (Sep - Oct 2021)</div>
                                <div className="font-medium text-lg">Digo. ID</div>
                                <div className="font-bold text-lg text-gray-400 mt-3">Developed and maintained both the
                                    front-end and back-end of a news portal using Laravel. Implemented responsive and
                                    user-friendly interfaces based on designs provided in Figma. Translated Figma
                                    designs into high-quality HTML, CSS, and JavaScript code. Designed and managed the
                                    database schema to store articles, user information, and other content. Collaborated
                                    closely with UI/UX designers to ensure design fidelity and a seamless user
                                    experience. Developed RESTful APIs and integrated them with front-end components for
                                    efficient data communication. Implemented authentication and authorization
                                    mechanisms to secure user data and content. Optimized the application for maximum
                                    speed and scalability. Conducted thorough testing and debugging to ensure the
                                    application’s reliability and performance. Utilized Git for version control to
                                    manage and collaborate on the codebase. Used Jira for project management to track
                                    progress, manage tasks, and collaborate with team members.
                                </div>

                            </div>
                        </div>
                        <div className="relative mt-[20px]">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                                <div className="font-bold text-2xl">Fullstack Developer</div>
                                <div className="font-bold text-xl text-gray-400"> Full Time (2019 - 2021)</div>
                                <div className="font-medium text-lg">PT. Dwi Purwa Teknologi</div>
                                <div className="font-bold text-lg text-gray-400 mt-3">Developed and maintained various
                                    web applications using PHP native and CodeIgniter framework. Designed and
                                    implemented front-end and back-end architecture for multiple projects. Created and
                                    managed database schemas to store user data, content, and application-specific
                                    information. Developed responsive and user-friendly interfaces to ensure a seamless
                                    user experience. Integrated third-party APIs to enhance the functionality of web
                                    applications. Conducted thorough testing and debugging to ensure the reliability and
                                    performance of applications. Collaborated with team members and stakeholders to
                                    gather requirements and provide regular updates on project progress. Utilized Git
                                    for version control to manage and collaborate on the codebase.
                                </div>

                            </div>
                        </div>

                        <div className="relative mt-[20px]">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                                <div className="font-bold text-2xl">Fullstack Developer</div>
                                <div className="font-bold text-xl text-gray-400"> Internship (Sep - Oct 2018)</div>
                                <div className="font-medium text-lg">PT. Karsa Mandiri Alkesindo</div>
                                <div className="font-bold text-lg text-gray-400 mt-3">Developed and maintained a
                                    web-based inventory management system for cashiers using Laravel. Designed and
                                    implemented the front-end and back-end architecture of the application. Created and
                                    managed the database schema to store inventory data, user information, and
                                    transaction records. Developed responsive and user-friendly interfaces for web and
                                    mobile applications. Built the mobile version of the inventory management system
                                    using React Native. Integrated various third-party APIs to enhance the functionality
                                    of the inventory system. Implemented authentication and authorization mechanisms to
                                    secure user data and transactions. Conducted thorough testing and debugging to
                                    ensure the reliability and performance of the web and mobile applications.
                                    Collaborated with stakeholders to gather requirements and provide regular updates on
                                    project progress. Utilized Git for version control to manage and collaborate on the
                                    codebase. Managed project tasks and workflows using Trello for effective project
                                    management.
                                </div>

                            </div>
                        </div>
                        <div className="relative mt-[20px]">
                            <div
                                className="float-left mr-5 bg-blue-600 h-[30px] w-[30px] leading-[30px] text-sm rounded-full font-bold text-white text-center">
                            </div>
                            <div className="table-row align-middle">
                            </div>
                            <div className="bg-blue-950 z-[-1] absolute top-0 w-px h-full left-[15px]"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                ref={workExperienceRef}
                className={`min-h-screen flex flex-col items-center justify-center w-full md:px-10 px-10 space-y-6 transition-transform font-silkscreen duration-1000 ease-in-out ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
            >
                <SubHeader title="Skills" className="text-white text-4xl mb-8"/>
                <div className="flex justify-center flex-wrap gap-8">
                    <div className="flex flex-col items-center">
                        <FaHtml5 className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">HTML5</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">CSS3</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJs className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiTypescript className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaReact className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">React.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNextdotjs className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiAngular className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Angular</p>
                    </div>
                    {/* Row 2 */}
                    <div className="flex flex-col items-center">
                        <SiTailwindcss className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Tailwind CSS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiBootstrap className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Bootstrap</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiLaravel className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Laravel</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Node.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiExpress className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">Express.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiCsharp className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">C#</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMysql className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">MySQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiPostgresql className="text-white text-6xl"/>
                        <p className="text-white text-lg mt-2">PostgreSQL</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutPage;