import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Head from '../Head';
import Footers from '../Footers';

import alee from '../../assets/images/project/aleemama.png';
import food from '../../assets/images/project/food.png';

import './css/ProjectDetails.css';

const projectData = {
    aleemama: {
        image: alee,
        title: 'aleeMAMA e-commerce website',
        year: '2026',
        type: 'E-Commerce',
        match: 'Personal Project',
        description:
            'A responsive e-commerce website developed for aleeMAMA, a natural food brand. The website allows users to explore nutritional food products, discover recipes, and learn more about the brand through a clean and user-friendly interface.',
        technologies: [
            'React.js',
            'JavaScript',
            'CSS',
            'React Router',
        ],
        features: [
            'Responsive e-commerce interface',
            'Product catalogue',
            'Shopping cart functionality',
            'Recipe showcase',
            'Product browsing',
            'Responsive design',
        ],
        github: 'https://github.com/theshifan/aleeMAMA.git',
        live: 'https://aleemama.vercel.app/',
    },

    food: {
        image: food,
        title: 'Food Application',
        year: '2025',
        type: 'Web Application',
        match: 'Personal Project',
        description:
            'A web application designed to provide a simple and user-friendly food ordering experience.',
        technologies: [
            'React',
            'JavaScript',
            'CSS',
        ],
        features: [
            'Food browsing',
            'Food ordering',
            'Responsive interface',
            'User-friendly design',
        ],
        github: 'https://github.com/',
        live: 'https://',
    },
};

function ProjectDetails() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectData[projectId];

    if (!project) {
        return (
            <>
                <Head />

                <main className="pd-not-found">
                    <h1>Project Not Found</h1>

                    <button onClick={() => navigate('/project')}>
                        Back to Projects
                    </button>
                </main>

                <Footers />
            </>
        );
    }

    return (
        <>
            <Head />

            <main className="pd-page">

                {/* HERO */}
                <section
                    className="pd-hero"
                    style={{
                        backgroundImage: `url(${project.image})`,
                    }}
                >

                    <div className="pd-overlay"></div>

                    <div className="pd-content">

                        <p className="pd-series">
                            PORTFOLIO
                        </p>

                        <h1 className="pd-title">
                            {project.title}
                        </h1>

                        <div className="pd-meta">

                            <span className="pd-match">
                                {project.match}
                            </span>

                            <span>
                                {project.year}
                            </span>

                            <span>
                                {project.type}
                            </span>

                        </div>

                        <p className="pd-description">
                            {project.description}
                        </p>


                        {/* BUTTONS */}
                        <div className="pd-buttons">

                            <button
                                className="pd-play"
                                onClick={() =>
                                    window.open(
                                        project.live,
                                        '_blank'
                                    )
                                }
                            >
                                <span>▶</span>
                                View Project
                            </button>


                            <button
                                className="pd-list"
                                onClick={() =>
                                    window.open(
                                        project.github,
                                        '_blank'
                                    )
                                }
                            >
                                <span>＋</span>
                                GitHub
                            </button>

                        </div>

                    </div>

                </section>


                {/* NAVIGATION */}
                <section className="pd-navigation">

                    <button className="pd-nav-active">
                        OVERVIEW
                    </button>

                    <button>
                        FEATURES
                    </button>

                    <button>
                        TECHNOLOGIES
                    </button>

                    <button>
                        DETAILS
                    </button>

                </section>


                {/* OVERVIEW */}
                <section className="pd-section">

                    <div className="pd-section-left">

                        <p className="pd-label">
                            OVERVIEW
                        </p>

                        <h2>
                            About the project
                        </h2>

                    </div>

                    <div className="pd-section-right">

                        <p>
                            {project.description}
                        </p>

                        <p>
                            This project was developed with a focus on
                            responsive design, usability and creating a
                            smooth experience across different screen sizes.
                        </p>

                    </div>

                </section>


                {/* FEATURES */}
                <section className="pd-section">

                    <div className="pd-section-left">

                        <p className="pd-label">
                            FEATURES
                        </p>

                        <h2>
                            What I built
                        </h2>

                    </div>

                    <div className="pd-section-right">

                        <div className="pd-features">

                            {project.features.map(
                                (feature, index) => (
                                    <div
                                        className="pd-feature"
                                        key={feature}
                                    >

                                        <span>
                                            0{index + 1}
                                        </span>

                                        <p>
                                            {feature}
                                        </p>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* TECHNOLOGIES */}
                <section className="pd-section">

                    <div className="pd-section-left">

                        <p className="pd-label">
                            TECHNOLOGIES
                        </p>

                        <h2>
                            Built with
                        </h2>

                    </div>

                    <div className="pd-section-right">

                        <div className="pd-technologies">

                            {project.technologies.map(
                                (technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* BACK */}
                <section className="pd-back">

                    <button
                        onClick={() => navigate('/project')}
                    >
                        ← Back to all project
                    </button>

                </section>

            </main>

            <Footers />
        </>
    );
}

export default ProjectDetails;