import React, { useEffect, useState } from 'react';
import './css/exp.css';

import Exp from '../../assets/images/recuiter/Experience.png';
import lumina from '../../assets/images/expirience/Luminar.png';
import Olivo from '../../assets/images/expirience/olivo.jpg'
import aleemama from '../../assets/images/expirience/aleemama.jpeg'

import Head from '../Head';
import Footers from '../Footers';
import Links from '../Links';

function Experience() {

    const [activeExperience, setActiveExperience] = useState(null);
    const [opacity, setOpacity] = useState(1);

    const experiences = [
        {
            id: 1,
            company: 'Aleemama',
            image: aleemama,
            role: 'Founder & Software Developer',
            location: 'Kannur, Kerala, India',
            date: 'February 2026 – August 2026',
            description: [
                'I’m currently working on my own business, aleeMAMA, where I’m involved in both the technical and business side. On the technical side, I’m building and managing the company’s web presence and digital systems, while also working on improving the customer experience. Since I’m directly involved with the business, I work closely with customers to understand their requirements and use that feedback to improve our products and services. I also handle digital marketing, social media, product promotion, and other day-to-day operations. This experience has taught me how to take ownership of a project, understand real customer requirements, and turn those requirements into practical solutions'
            ]
        },

        {
            id: 2,
            company: 'Olivo Technology',
            image : Olivo,
            role: 'Junior Full Stack Developer',
            location: 'Kannur, Kerala, India',
            date: 'July 2025 – February 2026',
            description: [
                'At Olivo Technology, I worked as a Junior Full Stack Developer, mainly on School Management and ERP applications. My primary work was on the React frontend, where I developed UI components and forms and integrated them with .NET APIs. I also worked with databases, designing database structures and writing SQL queries based on application requirements. Along with development, I spent a good amount of time debugging UI, API, and database issues, working with QA and backend developers to identify problems, implement fixes, and validate them during testing and deployment.'
            ]
        },

        {
            id: 3,
            company: 'Luminar Technolab',
            image:lumina,
            role: 'Python Full Stack Developer Intern',
            location: 'Ernakulam, Kerala, India',
            date: 'August 2024 – March 2025',
            description: [
                'At Luminar Technolab, I worked on a restaurant application for food ordering and order tracking. I was involved in developing UI components, fixing bugs, and troubleshooting issues in the application. I also worked closely with senior developers to understand problems, discuss solutions, and implement the required changes. This gave me practical experience with debugging, frontend development, and working in a team environment.”.'
            ]
        }
    ];

    /* =========================
       BACKGROUND OPACITY
    ========================= */

    useEffect(() => {

        if (!activeExperience) return;

        const handleScroll = () => {

            const scrollPosition = window.scrollY;

            const fadeStart = 100;
            const fadeDistance = 700;

            let newOpacity =
                1 - (scrollPosition - fadeStart) / fadeDistance;

            newOpacity = Math.max(
                0,
                Math.min(1, newOpacity)
            );

            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [activeExperience]);


    /* =========================
       OPEN EXPERIENCE
    ========================= */

    const openExperience = (experience) => {

        setActiveExperience(experience);

        setOpacity(1);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    /* =========================
       CLOSE EXPERIENCE
    ========================= */

    const closeExperience = () => {

        setActiveExperience(null);

        setOpacity(1);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    /* =========================
       EXPERIENCE MAIN PAGE
    ========================= */

    if (!activeExperience) {

        return (
            <div className="experience-page">

                <Head />

                <section className="experience-intro">

                    <p className="experience-label">
                        MY JOURNEY
                    </p>

                    <h1>
                        Experience
                    </h1>

                    <p className="experience-intro-text">
                        A look at the work and experiences
                        that have shaped my journey as a developer.
                    </p>

                </section>


                <section className="experience-cards">

                    {experiences.map((experience) => (

                        <div
                            key={experience.id}
                            className="experience-card"
                            onClick={() =>
                                openExperience(experience)
                            }
                        >

                            <div className="card-image">

                                <img
                                    src={experience.image}
                                    alt={experience.company}
                                />

                            </div>


                            <div className="card-content">

                                <p>
                                    {experience.date}
                                </p>

                                <h2>
                                    {experience.company}
                                </h2>

                                <h3>
                                    {experience.role}
                                </h3>

                                <span>
                                    Click to explore →
                                </span>

                            </div>

                        </div>

                    ))}

                </section>

                <Links />
                <Footers />

            </div>
        );
    }


    /* =========================
       EXPERIENCE DETAIL PAGE
    ========================= */

    return (

        <div className="experience-detail-page">

            {/* FIXED BACKGROUND */}

            <div
                className="experience-fixed-background"
                style={{
                    opacity: opacity
                }}
            >

                <img
                    src={activeExperience.image}
                    alt=""
                />

                <div className="experience-overlay"></div>

            </div>


            {/* BACK BUTTON */}

            <button
                className="experience-close"
                onClick={closeExperience}
            >
                ← Back
            </button>


            {/* SCROLLING CONTENT */}

            <main className="experience-detail-content">

                {/* INITIAL SPACE */}

                <section className="experience-detail-spacer">
                </section>


                {/* EXPERIENCE CONTENT */}

                <section className="experience-information">

                    <p className="experience-label">
                        {activeExperience.date}
                    </p>

                    <h1>
                        {activeExperience.company}
                    </h1>

                    <h2>
                        {activeExperience.role}
                    </h2>

                    <p className="experience-location">
                        {activeExperience.location}
                    </p>


                    <div className="experience-description">

                        {activeExperience.description.map(
                            (item, index) => (

                                <p key={index}>
                                    {item}
                                </p>

                            )
                        )}

                    </div>

                </section>


                {/* BOTTOM */}

                {/* <section className="experience-bottom">

                    <h2>
                        More to come.
                    </h2>

                </section> */}

            </main>

        </div>
    );
}

export default Experience;