import React from 'react';
import './css/skills.css'

import Django from '../../assets/images/skills/django.png';
import Reactpicture from '../../assets/images/skills/React.png';
import DjRest from '../../assets/images/skills/Djrest.png';
import html from '../../assets/images/skills/Html.png';
import CSS from '../../assets/images/skills/CSS.png';
import JS from '../../assets/images/skills/JS.png';
import sqls from '../../assets/images/skills/SQLpic.png';
import SQLAlchamy from '../../assets/images/skills/SQLAlchemy.png'

import Head from '../Head';
import Footers from '../Footers';

function Skillsset() {

    const skills = [
        {
            image: Django,
            name: 'Django'
        },
        {
            image: Reactpicture,
            name: 'React js'
        },
        {
            image: html,
            name: 'HTML'
        },
        {
            image: CSS,
            name: 'CSS'
        },
        {
            image: sqls,
            name: 'SQL'
        },
        {   
            image:SQLAlchamy,
            name: 'SQLAlchamy'
        },
        {
            image: DjRest,
            name: 'Django Rest Framework'
        },
        {
            image: JS,
            name: 'JavaScript'
        }
    ];

    return (
        <div className="skills-page">

            <Head />

            <main className="skills-container1">

                {skills.map((skill, index) => (

                    <div
                        className="skill-card1"
                        key={index}
                    >

                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="skill-img-card"
                        />

                        <h3>
                            {skill.name}
                        </h3>

                    </div>

                ))}

            </main>

            <Footers />

        </div>
    );
}

export default Skillsset;