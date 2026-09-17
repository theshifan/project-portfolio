import React from 'react';

import Canteen from '../../assets/images/project/foodtocken.jpg';
import brest from '../../assets/images/project/brestcancer2.jpg';
import food from '../../assets/images/project/food.png';
import alee from '../../assets/images/project/aleemama.png';

import Head from '../Head';
import Footers from '../Footers';

function ProjectMain() {
    const projects = [
         {
            image: alee,
            title: 'aleeMAMA e-comerce website',
            description:
                'Developed a responsive e-commerce website for aleeMAMA, a natural food brand, using React.js. The website showcases nutritional food products, recipes, and brand information, with features like product browsing, shopping cart, and a user-friendly interface.',
            technologies: ['React.js'],
        },
        // {
        //     image: Canteen,
        //     title: 'Food Token for Canteen',
        //     description:
        //         'A food token management system designed to simplify food ordering and token management.',
        //     technologies: ['React', 'Python', 'Django'],
        // },
        // {
        //     image: brest,
        //     title: 'Breast Cancer Detection',
        //     description:
        //         'A machine learning project focused on breast cancer detection and classification.',
        //     technologies: ['Python', 'Machine Learning'],
        // },
        {
            image: food,
            title: 'Food Application',
            description:
                'A web application designed to provide a simple and user-friendly food ordering experience.',
            technologies: ['React', 'JavaScript', 'CSS'],
        },
        // {
        //     image: move,
        //     title: 'Move It',
        //     description:
        //         'A project focused on providing a simple platform for managing moving and delivery services.',
        //     technologies: ['React', 'JavaScript'],
        // },
    ];

    return (
        <>
            <Head />

            <main style={{"top":"20px"}}>
                <section className="heros12">

                    <div className="projects-header">
                        <p className="projects-subtitle">
                            MY WORK
                        </p>

                        <h1 style={{ textAlign: 'center',width: '100%',margin: '0 auto'}}>
                            These are the projects
                            <br />
                            that I have Developed
                        </h1>
                    </div>

                    <div className="projects-container1">

                        {projects.map((project, index) => (
                            <article
                                className="project-card1"
                                key={index}
                            >
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                </div>

                                <div className="project-content">

                                    <h2>{project.title}</h2>

                                    <p>
                                        {project.description}
                                    </p>

                                    <div className="badges1">
                                        {project.technologies.map(
                                            (technology, techIndex) => (
                                                <span key={techIndex}>
                                                    {technology}
                                                </span>
                                            )
                                        )}
                                    </div>

                                </div>
                            </article>
                        ))}

                    </div>
                </section>
            </main>

            <Footers />
        </>
    );
}

export default ProjectMain;