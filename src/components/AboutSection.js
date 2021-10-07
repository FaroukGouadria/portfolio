import React from 'react'
import styled from 'styled-components'
import AboutSectionTitle from './AboutSectionTitle'
import Button from './button';
import Ptex from './Ptex';
import AboutImage from "../assets/image/about.png"

const AboutSectionStyle = styled.div`
    padding:10rem 0;
    .container{
        display :flex;
        align-items:center;
        justify-content:flex-start;
        text-align:left;
    }
    .aboutSection__left,
    .aboutSection__right{
        flex:1;
    }
    .section__title{
        text-align:left
    }
    .aboutimg{
        height:400px;
        wight:400px
    
    }
    .para{
        margin-top:2rem;
        margin-left:0;
    }
    .aboutSection__buttons{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:2rem;
    }
    @media only screen and (maw-with:950px){
        .aboutSection__left{
            flex:4;
        }
        .aboutSection__right{
            flex:3;
        }
    }
    @media only screen and (maw-with:768px){
        .container{
            flex-diraction:column;
            text-align:center;
        }
         .aboutSection__left,
    .aboutSection__right{
        width:100%;
    }
 .aboutSection__right{
        margin-top:3rem;
    }
    .section-title{
        text-align:center;
    }
    .para{
        margin :0 auto;
        margin-top:2rem;
    }
    .aboutSection__buttons{
        flex-direction:column;
        gap:0;
        .button-wrapper,
        a{
            width:100%,
            text-align:center;
        }
    }
    }

`;

export default function AboutSection() {
    return (
       <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <AboutSectionTitle
                     subheading="let me introduce my self" 
                     heading="About me "/>
                    <Ptex className="textabout">
                        Etudient D'ingenieurie informatique au sein de L'Ecole PolyTechnique Sousse, Je suis actuellement à la recherche d'un stage de fin d'études.Mes stages et mes Projets m'a permis de dévelloper mes compétences dans le devellopement informatique et de confirmer mon envoie d'ecoluer dans ce domaine.je souhaite m'impliquer efficacement au sein de votre équipe.
                    </Ptex>
                    <div className="aboutSection__buttons">
                        <Button btnLink="/projects"
                        btnText="Works" />
                        <Button btnLink="/about" btnText="Read More" outline/>
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img className="aboutimg" src={AboutImage} alt="about Section"  />
                </div>
            </div>
        </AboutSectionStyle>
    )
}
