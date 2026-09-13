import { use, useState } from 'react';
import type { TypeTechnology } from '../../Type/technologyType';
import TechnologyCard from './AvailableTech';
import YourStack from './YourStack';

interface TechnologiesProps {
    technoPromise: Promise<TypeTechnology[]>
}

const Technology = ({ technoPromise }: TechnologiesProps) => {
    // console.log(technoPromise);
    const technologies = use(technoPromise);
    // console.log(technologies, 'Technologies');
    const [selectedTechnologies, setSelectedTechnologies] = useState<TypeTechnology[]>([]);

    const handleAddToStack = (technology: TypeTechnology) => {
       setSelectedTechnologies((prev) =>{ 

        const alreadyExists = prev.some((item) => item.id === technology.id);
        if(alreadyExists) {
            return prev;
        }
        return[...prev, technology];
       });
    }


    const handleRemoveFromStack = (id: number) => {

        setSelectedTechnologies((prev) =>
            prev.filter((technology) => technology.id !== id)
        );
    };


    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    };


    return (
        <div className='container mx-auto'>
            <div>
                <h3 className='font-extrabold text-4xl leading-10 text-[#0F172A]'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h3>

                <p className='leading-6 text-[#64748B]font-[Plus_Jakarta_Sans]'>Pick one technology per category to build your stack.</p>

            </div>


            {/* Main Content */}
            <div className="flex items-start gap-5">

                {/* Available Technologies */}
                <div className="flex-1">
                    <TechnologyCard
                        technologies={technologies}
                        onAddToStack={handleAddToStack}
                    />
                </div>


                {/* Your Stack */}
                <div className="w-67.5 shrink-0">
                    <YourStack
                        technologies={selectedTechnologies}
                        onRemoveFromStack={handleRemoveFromStack}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>

            </div>
        </div>
    );
};

export default Technology;