import React from 'react';
import './sections.css'

const NeonCard = ({ title, description }) => {
    return (
        <div className="card" >
            magic card
        </div>
    );
};


const ObjectivesSection = () => {
    return (
        <div className="objectives-section" >
            <NeonCard title="Misión" description="Nuestra misión es proporcionar una protección inquebrantable en Twitter, identificando todo tipo de vulnerabilidades. Nos esforzamos por ofrecer actualizaciones que anticipen y neutralicen las amenazas antes de que impacten a los usuarios." />
            <NeonCard title="Visión" description="Imaginamos un futuro donde Twitter sea sinónimo de seguridad y fiabilidad. Nuestra visión es ser el referente líder en seguridad digital para Twitter, marcando el estándar en prevención a amenazas. Aspiramos a construir una comunidad donde los usuarios se sientan completamente seguros, empoderados por nuestra plataforma para interactuar y compartir sin temor." />
            <NeonCard title="Objetivo" description="Evolución constante en la detección de vulnerabilidades en Twitter. Nos dedicamos a identificar proactivamente y abordar de manera efectiva las amenazas emergentes en la plataforma, asegurando que nuestros usuarios estén siempre un paso adelante en la seguridad digital." />
        </div>
    );
};

export default ObjectivesSection;