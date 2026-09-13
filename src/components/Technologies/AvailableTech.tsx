import type { TypeTechnology } from "../../Type/technologyType";
import TechCard from "./TechCard";


interface TechnologyCardProps {
    technologies: TypeTechnology[];
    onAddToStack: (technology: TypeTechnology) => void;
}

const TechnologyCard = ({
    technologies, 
    onAddToStack,
}: TechnologyCardProps)  => {
    return (
        <div className="grid grid-cols-3 gap-5 my-9 mx-8 p-5">
            {technologies.map((technology) => {
                return <TechCard key={technology.id}technology={technology}
                onAddToStack={onAddToStack}></TechCard>
            })}
        </div>
    );
};

export default TechnologyCard;