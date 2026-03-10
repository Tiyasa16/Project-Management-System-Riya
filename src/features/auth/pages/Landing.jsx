import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">

            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
                <h1 className="text-xl font-bold text-[#002D74]">
                    TaskSphere
                </h1>

                <div className="flex gap-6 items-center">
                    <Link to="/login" className="text-sm font-medium hover:text-[#002D74]">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-[#002D74] text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-900 transition"
                     >
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="px-10 py-24 grid md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Organize Projects.
                        <span className="text-[#002D74]"> Deliver On Time.</span>
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-lg">
                        Centralize tasks, assign responsibilities, monitor deadlines,
                        and improve team productivity with a structured workflow system.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <Link
                            to="/register"
                            className="bg-[#002D74] text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition"
                        >
                            Create Account
                        </Link>

                        <Link
                            to="/login"
                            className="border border-[#002D74] text-[#002D74] px-6 py-3 rounded-xl hover:bg-[#002D74] hover:text-white transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* Right Side Mock Dashboard */}
                <div className="bg-white shadow-xl rounded-2xl p-6 border">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Website Redesign</span>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                In Progress
                            </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-[#002D74] rounded-full w-3/4"></div>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Mobile App Launch</span>
                            <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                                Pending
                            </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-[#002D74] rounded-full w-1/2"></div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Features */}
            <section className="bg-white py-20 px-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-3">Task Assignment</h3>
                        <p className="text-gray-600 text-sm">
                            Assign tasks to team members with deadlines and priorities.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-3">Progress Tracking</h3>
                        <p className="text-gray-600 text-sm">
                            Monitor project milestones and completion percentages.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-3">Team Collaboration</h3>
                        <p className="text-gray-600 text-sm">
                            Enable communication and updates across your organization.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#002D74] text-white text-center py-16 px-6">
                <h3 className="text-2xl font-semibold">
                    Start Managing Projects More Efficiently
                </h3>
                <Link
                    to="/register"
                    className="inline-block mt-6 bg-white text-[#002D74] px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
                >
                    Get Started Now
                </Link>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} TaskSphere. All rights reserved.
            </footer>

        </div>
    );
};

export default Landing;
