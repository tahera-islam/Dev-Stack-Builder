
import type { TypeTechnology } from '../../Type/technologyType';

int

const TechCard = ({technology}:{technology:TypeTechnology}) => {
    return (
        <div className="w-full max-w-67.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

            {/* Top Section */}
            <div className="flex items-start justify-between">

                {/* Technology Icon */}
                <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-10 w-10 object-contain"
                />

                {/* Badge */}
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
                    {technology.badge}
                </span>
            </div>

            {/* Technology Name */}
            <h2 className="mt-5 text-lg font-bold text-slate-900">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="mt-2 min-h-18 text-sm leading-5 text-slate-500">
                {technology.description}
            </p>
            <div className="divider"></div>

            {/* Meta Information */}
            <div className="mt-4 flex items-center justify-between gap-2 text-xs">

                {/* Category */}
                <span className="rounded bg-slate-50 px-2 py-1 font-medium text-slate-700">
                    {technology.category}
                </span>

                {/* Difficulty */}
                <span className="text-slate-500">
                    {technology.difficulty}
                </span>

                {/* Rating */}
                <span className="flex items-center gap-1 font-medium text-slate-700">
                    <span className="text-yellow-400">★</span>
                    {technology.rating.toFixed(1)}
                </span>
            </div>

            {/* Add To Stack Button */}
            <button
                type="button"
                onClick={() => onAddToStack?.(technology)}
                className="mt-4 w-full rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-800 active:scale-[0.98]"
            >
                Add to Stack
            </button>
        </div>
    );
};

export default TechCard;