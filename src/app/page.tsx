/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YQ7Li5DKAys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import React from "react";

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <MountainIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Next.gold</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Technologies
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Download
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Next.gold
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    A powerful boilerplate that combines Next.js, Bun, Elysia, and GraphQL for a seamless development
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32" id="features">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-12">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Key Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Streamline Your Development Workflow
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    The Next.gold Boilerplate provides a robust foundation for your web applications, empowering you to
                                    focus on building amazing features.
                                </p>
                            </div>
                            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Quick Setup</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Get up and running in no time with our pre-configured boilerplate.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Tailwind CSS Integration</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Leverage the power of Tailwind CSS for seamless styling.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Elysia Data Management</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Effortlessly manage your application's data with the Elysia library.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Bun Development Server</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Enjoy lightning-fast development with the Bun server.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">GraphQL Integration</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Seamlessly integrate GraphQL for powerful data management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="technologies">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Powerful Technologies, Seamless Integration
                            </h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                The Next.gold Boilerplate leverages the best tools for a cutting-edge development experience.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <NavigationIcon className="h-12 w-12" />
                                <span className="text-sm font-medium">Next.js</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <RabbitIcon className="h-12 w-12" />
                                <span className="text-sm font-medium">Bun</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <EclipseIcon className="h-12 w-12" />
                                <span className="text-sm font-medium">Elysia</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <WindIcon className="h-12 w-12" />
                                <span className="text-sm font-medium">Tailwind CSS</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <TypeIcon className="h-12 w-12" />
                                <span className="text-sm font-medium">TypeScript</span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <QrCodeIcon className="h-12 w-12" />
                                <span className="text-sm font-medium">GraphQL</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32" id="download">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Get Started with the Next.gold Boilerplate
                            </h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Download the boilerplate or access the source code to kickstart your project.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Download
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                View Source
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Next.gold. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function EclipseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a7 7 0 1 0 10 10" />
        </svg>
    )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function NavigationIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
    )
}


function QrCodeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
            <path d="M21 21v.01" />
            <path d="M12 7v3a2 2 0 0 1-2 2H7" />
            <path d="M3 12h.01" />
            <path d="M12 3h.01" />
            <path d="M12 16v.01" />
            <path d="M16 12h1" />
            <path d="M21 12v.01" />
            <path d="M12 21v-1" />
        </svg>
    )
}


function RabbitIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M13 16a3 3 0 0 1 2.24 5" />
            <path d="M18 12h.01" />
            <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
            <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
            <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
        </svg>
    )
}


function TypeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1="9" x2="15" y1="20" y2="20" />
            <line x1="12" x2="12" y1="4" y2="20" />
        </svg>
    )
}


function WindIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
    )
}