import React from 'react';

const Contact = () => {
    return (
        <div className="h-full flex overflow-hidden">
            <section className="w-[400px] border-r border-bttr-border flex flex-col bg-bttr-black">
                <div className="p-8 border-b border-bttr-border flex justify-between items-center">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.4em]">Directory</h2>
                    <span className="material-symbols-outlined text-sm text-bttr-text-muted cursor-pointer hover:text-white transition-colors">search</span>
                </div>
                <div className="flex-1 overflow-y-auto no-scrollbar">
                    <div className="group border-b border-bttr-border bg-bttr-grey/30 cursor-pointer">
                        <div className="p-8 flex items-center justify-between group-hover:bg-bttr-grey transition-colors">
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Julian Rossi</span>
                                <span className="text-[9px] text-primary font-black uppercase tracking-[0.2em]">Architecture</span>
                            </div>
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <div className="group border-b border-bttr-border cursor-pointer">
                        <div className="p-8 flex items-center justify-between hover:bg-bttr-grey transition-colors">
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Sora Oh</span>
                                <span className="text-[9px] text-bttr-text-muted font-bold uppercase tracking-[0.2em]">Visual Arts</span>
                            </div>
                        </div>
                    </div>
                    <div className="group border-b border-bttr-border cursor-pointer">
                        <div className="p-8 flex items-center justify-between hover:bg-bttr-grey transition-colors">
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Marc Newson</span>
                                <span className="text-[9px] text-bttr-text-muted font-bold uppercase tracking-[0.2em]">Industrial</span>
                            </div>
                        </div>
                    </div>
                    <div className="group border-b border-bttr-border cursor-pointer">
                        <div className="p-8 flex items-center justify-between hover:bg-bttr-grey transition-colors">
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Elena Vost</span>
                                <span className="text-[9px] text-bttr-text-muted font-bold uppercase tracking-[0.2em]">Curation</span>
                            </div>
                        </div>
                    </div>
                    <div className="group border-b border-bttr-border cursor-pointer">
                        <div className="p-8 flex items-center justify-between hover:bg-bttr-grey transition-colors">
                            <div className="flex flex-col gap-1">
                                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Kento Yamazaki</span>
                                <span className="text-[9px] text-bttr-text-muted font-bold uppercase tracking-[0.2em]">Photography</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 border-t border-bttr-border">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-bttr-border flex items-center justify-center text-[10px] font-black">AD</div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors">Active Profile</span>
                    </div>
                </div>
            </section>

            <section className="flex-1 flex flex-col bg-bttr-black">
                <header className="h-24 border-b border-bttr-border px-12 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <h3 className="text-2xl font-serif uppercase tracking-tight">Julian Rossi</h3>
                        <div className="h-px w-12 bg-bttr-border"></div>
                        <span className="text-[10px] font-black text-bttr-text-muted uppercase tracking-[0.3em]">Project: Monolith House</span>
                    </div>
                    <div className="flex gap-8 items-center cursor-pointer">
                        <button className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer">Files</button>
                        <button className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer">Contract</button>
                        <span className="material-symbols-outlined text-lg text-bttr-text-muted cursor-pointer">more_vert</span>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-12 lg:p-20 no-scrollbar space-y-16">
                    <div className="chat-line pb-12 border-b border-bttr-border">
                        <div className="flex justify-between items-baseline mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Julian Rossi</span>
                            <span className="text-[9px] text-bttr-text-muted font-medium uppercase tracking-[0.2em]">10:42 AM</span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-2xl">
                            I have updated the structural drafts for the south-facing atrium. The concrete texture should be more porous than we initially discussed to better capture the morning light.
                        </p>
                    </div>

                    <div className="chat-line pb-12 border-b border-bttr-border">
                        <div className="flex justify-between items-baseline mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">You</span>
                            <span className="text-[9px] text-bttr-text-muted font-medium uppercase tracking-[0.2em]">11:15 AM</span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-2xl">
                            Agreed. The porous finish will provide the brutalist warmth we are aiming for. Did you receive the revised site measurements from the surveying team?
                        </p>
                    </div>

                    <div className="chat-line pb-12 border-b border-bttr-border">
                        <div className="flex justify-between items-baseline mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Julian Rossi</span>
                            <span className="text-[9px] text-bttr-text-muted font-medium uppercase tracking-[0.2em]">11:20 AM</span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-2xl">
                            Received. Everything aligns with the 0.5mm tolerance. I am sending the final render package now for your review. It contains the light studies for both winter and summer solstices.
                        </p>
                    </div>

                    <div className="chat-line pb-12 border-none">
                        <div className="flex justify-between items-baseline mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Julian Rossi</span>
                            <span className="text-[9px] text-bttr-text-muted font-medium uppercase tracking-[0.2em]">Just Now</span>
                        </div>
                        <div className="bg-bttr-grey border border-bttr-border p-6 flex items-center justify-between max-w-md group cursor-pointer hover:border-primary transition-all">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">description</span>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em]">MONOLITH_SOLSTICE_STUDY.PDF</p>
                                    <p className="text-[8px] text-bttr-text-muted uppercase tracking-[0.1em]">14.2 MB — PDF</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-sm text-bttr-text-muted group-hover:text-primary">download</span>
                        </div>
                    </div>
                </div>

                <div className="p-12 border-t border-bttr-border">
                    <div className="relative flex items-center">
                        <input className="w-full bg-transparent border-none focus:ring-0 text-sm tracking-wide py-4 pr-16 placeholder:text-bttr-border uppercase outline-none" placeholder="Message Julian Rossi..." type="text" />
                        <button className="absolute right-0 flex items-center justify-center group cursor-pointer">
                            <span className="material-symbols-outlined text-primary font-light text-3xl rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_right_alt</span>
                        </button>
                    </div>
                    <div className="flex gap-6 mt-4 cursor-pointer">
                        <button className="text-[9px] font-black text-bttr-text-muted uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-xs">attach_file</span> Attach
                        </button>
                        <button className="text-[9px] font-black text-bttr-text-muted uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-xs">schedule</span> Schedule
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
