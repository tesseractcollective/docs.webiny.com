import clsx from "clsx";

function TabBar({ primary, secondary = [], showTabMarkers = true, children }) {
    return (
        <div className="flex text-slate-400 text-nav-directory">
            <div className="flex-none text-code-filename px-4 lg:px-[2.375rem] py-[0.625rem] lg:py-4 flex items-center font-source-sans-pro">
                {primary.name}
                {showTabMarkers &&
                    (primary.saved ? (
                        <svg
                            viewBox="0 0 4 4"
                            className="ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible"
                        >
                            <path
                                d="M-1 -1L5 5M5 -1L-1 5"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <div className="ml-2.5 flex-none w-1 h-1 rounded-full bg-current" />
                    ))}
            </div>
            <div className={clsx("flex-auto flex items-center bg-code-bar")}>
                {secondary.map(({ name, open = true, className }) => (
                    <div
                        key={name}
                        className={clsx("px-4 py-1 border-r border-slate-200/5", className, {
                            italic: !open
                        })}
                    >
                        {name}
                    </div>
                ))}
                {children && (
                    <div className="flex-auto flex items-center justify-end px-4 space-x-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

export function Editor({ filename, children }) {
    return (
        <section className="code-block mt-[1.875rem] lg:mt-[3.75rem] mb-[1.875rem] lg:mb-[3.75rem] first:mt-0 last:mb-0 bg-code-tab rounded-[0.625rem] shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset">
            <TabBar primary={{ name: filename }} showTabMarkers={false} />
            <div className="children:my-0 children:!shadow-none children:bg-transparent children:rounded-none">
                {children}
            </div>
        </section>
    );
}
