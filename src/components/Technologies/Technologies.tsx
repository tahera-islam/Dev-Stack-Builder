import React, {use} from 'react';
import type { TypeTechnology } from '../../Type/technologyType';

interface TechnologiesProps {
    technoPromise: Promise<TypeTechnology[]>
}

const Technology = ({technoPromise}:TechnologiesProps) => {
    console.log(technoPromise);
    const technologies = use(technoPromise);
    console.log(technologies, 'Technologies');
    return (
        <div>
            
        </div>
    );
};

export default Technology;