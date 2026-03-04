import React from 'react';

const Profile = () => {
    return (
        <div className="h-full flex flex-col min-h-screen">
            <header className="pt-24 px-12 lg:px-20 border-b border-bttr-border pb-16 bg-bttr-black">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Certified Author</span>
                            <span className="material-symbols-outlined text-primary text-base">verified</span>
                        </div>
                        <h1 className="text-huge font-serif font-black tracking-tighter -ml-2 uppercase text-white">
                            Julian<br />Rossi
                        </h1>
                    </div>
                    <div className="flex flex-col gap-10 min-w-[300px]">
                        <div className="flex gap-12 text-white">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Followers</span>
                                <span className="text-xl font-bold tracking-tight">12.4K</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Following</span>
                                <span className="text-xl font-bold tracking-tight">842</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Views</span>
                                <span className="text-xl font-bold tracking-tight">1.2M</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="bg-transparent border border-white/20 text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all cursor-pointer">
                                Edit Profile
                            </button>
                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors cursor-pointer">
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="px-12 lg:px-20 border-b border-bttr-border bg-bttr-black">
                <div className="flex gap-12">
                    <a className="py-10 border-b-2 border-primary text-[10px] font-black uppercase tracking-[0.4em] text-white cursor-pointer" href="#">My Projects (14)</a>
                    <a className="py-10 border-b-2 border-transparent text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors cursor-pointer" href="#">Drafts (03)</a>
                    <a className="py-10 border-b-2 border-transparent text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors cursor-pointer" href="#">Collections</a>
                    <a className="py-10 border-b-2 border-transparent text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors cursor-pointer" href="#">About</a>
                </div>
            </section>

            <section className="p-0 flex-1 bg-bttr-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-bttr-border border-b border-bttr-border">
                    <div className="bg-bttr-black group cursor-pointer overflow-hidden">
                        <div className="aspect-[4/5] bg-bttr-grey overflow-hidden relative">
                            <img alt="Project" className="w-full h-full object-cover mono-img opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvIjPuJoJX3dTn5P1j3e-3yOzU8g21Z969IbBTwaaGFRGOAwDgAkO8vz9X22ZHBGHqkFop9ebyIewYPOlm4cj9ik0gEG8LCrULVtzld5xR4OcHoZUfKzxpGtqVWbM9j_bSSvLEMJM9uH5KHk63-V8aKwVN-zwMqLjoFlBmTlzqmnOcXHxhnwdJtPU7eSXkvRhV48NoF9kFgTruAFzH03vtpiwdwyrK0yyMKG9KrzpTetCI1ruqtec28y-2cOlp7PHHLNF1Ob22ees" />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[9px] font-black tracking-[0.3em] text-primary uppercase">Architecture</span>
                                <span className="text-[9px] font-black tracking-[0.3em] text-gray-600">2024</span>
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-white">Monolith House</h3>
                            <p className="text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase">Brutalist Residential Study</p>
                        </div>
                    </div>

                    <div className="bg-bttr-black group cursor-pointer overflow-hidden">
                        <div className="aspect-[4/5] bg-bttr-grey overflow-hidden relative">
                            <img alt="Project" className="w-full h-full object-cover mono-img opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs8_br8xfzlZ2Vat7ugNLyJOascOoKPhgpOzssHonL7NfyZvoiT565Z3aaYwT8Fnkhyr0W90l-m_c23D1n3OR-UxhUDUb_E-QMnM25pY3NuQHexFt8EbyXidSlAYY_FHVLMwz1QmOQPcJ7CkC2GBFZe9es-wWMXgWZlYMqfrKMrxDMoZguSeneHgodtFpRHivy7NRy-wWiFdYZvYu9l3GMOLxhYf06vvLNybPGGw92UXqO0ZECAir1zG6KHnI0o4pxzPF15OCcU0o" />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[9px] font-black tracking-[0.3em] text-primary uppercase">Objects</span>
                                <span className="text-[9px] font-black tracking-[0.3em] text-gray-600">2023</span>
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-white">Void Series 01</h3>
                            <p className="text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase">Experimental Casting</p>
                        </div>
                    </div>

                    <div className="bg-bttr-black group cursor-pointer overflow-hidden">
                        <div className="aspect-[4/5] bg-bttr-grey overflow-hidden relative">
                            <img alt="Project" className="w-full h-full object-cover mono-img opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYuHJykwKXThZ5C4j7-KQqX5J6oFIyC-uv1fgxp6yAIu5L6QNseBN_JUs7iy9gv8esudhvXA7ZdaSuhtVExd7KVL7OyJJ6-KS35XPRrkCwAr2qUSCZeNyvdW4hzY0IY6Hck8Lii1uZPwi06o3pKJBksdulF2pMKV9mEBsWrkGoLrD4Zl6f4J49iS53v0ByTndAl24U4Fgfc2ul4gWnz9EYELLWBWzxnEQ3TTqUXhFY0SvzONVqkdunHMV-KyQH00-yy5Z46uhEeCY" />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[9px] font-black tracking-[0.3em] text-primary uppercase">Visuals</span>
                                <span className="text-[9px] font-black tracking-[0.3em] text-gray-600">2023</span>
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-white">Atmospheric Pressure</h3>
                            <p className="text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase">Digital Composition</p>
                        </div>
                    </div>

                    <div className="bg-bttr-black group cursor-pointer overflow-hidden">
                        <div className="aspect-[4/5] bg-bttr-grey overflow-hidden relative">
                            <img alt="Project" className="w-full h-full object-cover mono-img opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjay5QrUHdjUdkX3QG-dRWYwuVQvQfW2Sa6la_YtP2FRnZO8Tw2HaBuA5H7DwXg4u4vpcRtu_gyD8amc1RyY3-hIf9rwD4YiE4fGKCg7xTYiQoozo1o1TcWvymB1NjAPzkOenw2wRRl_j77MBgybtkSXyQgSNCEBl9WTVtWIuHuHPsO_xtJa7jV4Au70wxXLtRbNTn7r7I24kZSgsnzssMgvyMHtbSWlTmtVVWdOcfKQ9eeueciBzIvH17dMNdawTuFB0tQ5Jc7A" />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[9px] font-black tracking-[0.3em] text-primary uppercase">Concept</span>
                                <span className="text-[9px] font-black tracking-[0.3em] text-gray-600">2024</span>
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-white">The Shadow Play</h3>
                            <p className="text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase">Urban Light Intervention</p>
                        </div>
                    </div>

                    <div className="bg-bttr-black group cursor-pointer overflow-hidden flex flex-col items-center justify-center border border-white/5 border-dashed m-10 min-h-[400px]">
                        <span className="material-symbols-outlined text-gray-700 text-4xl mb-6">add</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Create New Project</span>
                    </div>

                    <div className="bg-bttr-black/50 p-8 flex items-end">
                        <span className="text-[150px] font-black text-white/5 leading-none select-none">05</span>
                    </div>
                </div>
            </section>

            <footer className="p-12 lg:p-20 bg-bttr-black border-t border-bttr-border">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="w-5 h-5 bg-primary flex items-center justify-center">
                            <span className="text-white font-black text-[10px] tracking-tighter">C</span>
                        </div>
                        <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.5em]">© 2026 INSPIRA MEDIA — ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="flex gap-12 text-[8px] font-black text-gray-500 uppercase tracking-[0.4em]">
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Contact Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Profile;
