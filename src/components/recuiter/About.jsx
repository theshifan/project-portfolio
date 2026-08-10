import React from 'react';
import Head from '../Head';
import Footer from '../Footers';
import Links from '../Links';

import Shifan from '../../assets/images/recuiter/Experience.png';
import './css/about.css'
function About() {

    return (
        <div className="about-page">

            <Head />

            {/* =========================
                ABOUT HERO
            ========================= */}

            <section className="about-hero">

                <div className="about-title">

                    <p className="about-label">
                        GET TO KNOW ME
                    </p>

                    <h1>
                        About me
                    </h1>

                </div>


                <div className="about-profile">

                    <div className="about-photo">

                        <img
                            src={Shifan}
                            alt="Shifan Abdulla"
                        />

                    </div>


                    <div className="about-intro">

                        <h2>
                            I’m Shifan, a builder at heart.
                        </h2>

                        <p>
                            I don’t just write code — I help shape
                            ideas into usable, real-world products.
                        </p>

                        <p>
                            With experience across development,
                            content creation, and entrepreneurship,
                            I understand both the technical and
                            business sides of building a product.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================
                MY APPROACH
            ========================= */}

            <section className="about-section">

                <div className="about-section-title">

                    <span>01</span>

                    <h2>
                        How I work
                    </h2>

                </div>


                <div className="about-section-content">

                    <p>
                        I’m comfortable wearing multiple hats,
                        moving quickly, and adapting as a product
                        evolves. I enjoy environments where
                        experimentation, ownership, and
                        problem-solving matter more than rigid
                        roles or titles.
                    </p>

                    <p>
                        Whether it’s building features, improving
                        workflows, optimizing user experience, or
                        thinking through product decisions, I focus
                        on creating practical solutions that deliver
                        real value.
                    </p>

                    <p>
                        I care about clean architecture, thoughtful
                        design, and building systems that are easy
                        to maintain and grow.
                    </p>

                </div>

            </section>


            {/* =========================
                MY JOURNEY
            ========================= */}

            <section className="about-section">

                <div className="about-section-title">

                    <span>02</span>

                    <h2>
                        My journey
                    </h2>

                </div>


                <div className="about-section-content">

                    <p>
                        I completed my B.Tech in 2024, after which
                        I gained hands-on industry experience through
                        an internship at Luminar Technolab, where I
                        strengthened my foundation in full-stack
                        development and real-world application
                        building.
                    </p>

                    <p>
                        Following this, I worked as a Full Stack
                        Developer at Olivo Technology, contributing
                        to production-level projects and collaborating
                        across teams to deliver practical solutions.
                    </p>

                    <div className="journey-line">

                        <div>
                            <strong>2024</strong>
                            <span>Luminar Technolab</span>
                        </div>

                        <div>
                            <strong>2025</strong>
                            <span>Olivo Technology</span>
                        </div>

                        <div>
                            <strong>2026</strong>
                            <span>aleeMAMA</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                BEYOND DEVELOPMENT
            ========================= */}

            <section className="about-section">

                <div className="about-section-title">

                    <span>03</span>

                    <h2>
                        Beyond development
                    </h2>

                </div>


                <div className="about-section-content">

                    <p>
                        I am a co-founder of aleeMAMA, a family-run
                        business focused on baby food products.
                        Being involved in building and growing a
                        real business has given me practical insight
                        into product quality, customer trust, and
                        operational decision-making.
                    </p>

                    <p>
                        Through my page “Shifan Cooks”, where I share
                        cooking videos as a passion project, I’ve
                        learned the value of consistency, audience
                        engagement, and clear visual communication.
                    </p>

                </div>

            </section>


            {/* =========================
                FINAL STATEMENT
            ========================= */}

            <section className="about-final">

                <p>
                    I’m driven by curiosity, continuous learning,
                    and the desire to build things that genuinely
                    help people.
                </p>

                <h2>
                    Build. Learn. Improve.
                </h2>

            </section>


            <Links />

            <Footer />

        </div>
    );
}

export default About;