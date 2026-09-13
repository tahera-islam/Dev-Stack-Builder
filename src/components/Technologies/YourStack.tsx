import React from 'react';

const YourStack = () => {
    return (
        <div className="w-full max-w-[270px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            {/* Header */}
            <div>
                <h2 className="text-sm font-bold text-slate-900">
                    Your Stack
                </h2>

                <p className="mt-1 text-[11px] text-slate-400">
                    {technologies.length > 0
                        ? `${technologies.length} Technology Selected`
                        : "No technologies selected yet."}
                </p>
            </div>


            {/* Empty State */}
            {technologies.length === 0 && (
                <div className="mt-4 flex h-[66px] items-center justify-center rounded-xl border border-dashed border-slate-200">
                    <p className="text-[11px] text-slate-400">
                        Your stack is empty.
                    </p>
                </div>
            )}


            {/* Selected Technologies */}
            {technologies.length > 0 && (
                <div className="mt-4 space-y-2">

                    {technologies.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2.5 py-2"
                        >
                            {/* Technology Info */}
                            <div className="flex items-center gap-2">

                                <img
                                    src={technology.icon}
                                    alt={`${technology.name} icon`}
                                    className="h-5 w-5 object-contain"
                                />

                                <span className="text-xs font-medium text-slate-800">
                                    {technology.name}
                                </span>

                            </div>


                            {/* Remove Button */}
                            <button
                                type="button"
                                className="text-sm text-slate-400 transition-colors hover:text-slate-700"
                            >
                                ×
                            </button>
                        </div>
                    ))}

                </div>
            )}


            {/* Remove All */}
            {technologies.length > 0 && (
                <button
                    type="button"
                    className="mt-4 w-full rounded-md border border-red-200 px-3 py-2 text-[10px] font-medium text-red-500 transition-colors hover:bg-red-50"
                >
                    Remove All
                </button>
            )}

        </div>
    );
};

export default YourStack;