
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import brest from '../../assets/images/project/brestcancer2.jpg';
import Canteen from '../../assets/images/project/foodtocken.jpg';
import food from '../../assets/images/project/food.png';
import alee from '../../assets/images/project/aleemama.png';

import Head from '../Head';
import Footers from '../Footers';

import './css/ProjectMain.css';

const projects = [
    {
        image: alee,
        title: 'aleeMAMA e-commerce website',
        description:
            'Developed a responsive e-commerce website for aleeMAMA, a natural food brand, using React.js. The website showcases nutritional food products, recipes, and brand information, with features like product browsing, shopping cart, and a user-friendly interface.',
        technologies: ['React.js'],
        slug: 'aleemama',
    },

    {
        image: food,
        title: 'Food Application',
        description:
            'A web application designed to provide a simple and user-friendly food ordering experience.',
        technologies: ['React', 'JavaScript', 'CSS'],
        slug: 'food',
    },

    // Add these back whenever you want them in the row:

    // {
    //     image: Canteen,
    //     title: 'Food Token for Canteen',
    //     description:
    //         'A food token management system designed to simplify food ordering and token management.',
    //     technologies: ['React', 'Python', 'Django'],
    //     slug: 'food-token',
    // },

    // {
    //     image: brest,
    //     title: 'Breast Cancer Detection',
    //     description:
    //         'A machine learning project focused on breast cancer detection and classification.',
    //     technologies: ['Python', 'Machine Learning'],
    //     slug: 'breast-cancer',
    // },
];

function ProjectMain() {
    const [active, setActive] = useState(0);

    const navigate = useNavigate();

    const current = projects[active];

    return (
        <>
            <Head />

            <main className="pm-page">

                <section className="pm-hero">

                    <div className="pm-header">

                        <p className="pm-subtitle">
                            My work
                        </p>

                        <h1>
                            These are the projects
                            <br />
                            that I have developed
                        </h1>

                    </div>


                    {/* Card row */}
                    <div className="pm-stage">

                        {projects.map((project, index) => {

                            const isActive = index === active;

                            const Tag = isActive ? 'article' : 'button';

                            return (
                                <Tag
                                    key={project.title}
                                    className={`pm-card ${
                                        isActive ? 'is-active' : ''
                                    }`}

                                    {...(!isActive && {
                                        type: 'button',

                                        onClick: () => {
                                            setActive(index);
                                        },

                                        'aria-label': `Show ${project.title}`,
                                    })}

                                    // Click the active project to open details
                                    {...(isActive && {
                                        onClick: () => {
                                            navigate(
                                                `/projects/${project.slug}`
                                            );
                                        },

                                        role: 'button',

                                        tabIndex: 0,

                                        onKeyDown: (event) => {
                                            if (
                                                event.key === 'Enter' ||
                                                event.key === ' '
                                            ) {
                                                navigate(
                                                    `/projects/${project.slug}`
                                                );
                                            }
                                        },
                                    })}
                                >

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="pm-card-image"
                                    />

                                    <div className="pm-card-top">

                                        <span className="pm-brand">
                                            PORTFOLIO
                                        </span>

                                        {isActive && (
                                            <span className="pm-tag">
                                                Selected Works
                                            </span>
                                        )}

                                    </div>


                                    <div className="pm-card-bottom">

                                        <h2 className="pm-card-title">
                                            {project.title}
                                        </h2>

                                        {isActive && (
                                            <span className="pm-highlight">
                                                {project.technologies.join(' / ')}
                                            </span>
                                        )}

                                    </div>

                                </Tag>
                            );
                        })}

                    </div>


                    {/* Progress bar */}
                    <div
                        className="pm-progress"
                        role="tablist"
                        aria-label="Projects"
                    >

                        {projects.map((project, index) => (

                            <button
                                key={project.title}
                                type="button"
                                role="tab"
                                aria-selected={index === active}
                                aria-label={project.title}

                                className={`pm-progress-bar ${
                                    index === active ? 'is-active' : ''
                                }`}

                                onClick={() => setActive(index)}
                            />

                        ))}

                    </div>


                    {/* Project description */}
                    <p
                        className="pm-description"
                        key={current.title}
                    >
                        {current.description}
                    </p>

                </section>

            </main>

            <Footers />
        </>
    );
}

export default ProjectMain;
