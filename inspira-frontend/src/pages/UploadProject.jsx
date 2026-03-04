import React from 'react';

const UploadProject = () => {
    return (
        <div className="h-full flex flex-col min-h-screen">
            <header className="p-12 lg:p-20 flex justify-between items-end border-b border-bttr-border">
                <div>
                    <span className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Submission Portal</span>
                    <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter uppercase">Upload<br />Project</h1>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 pb-2">
                    Draft / Variant 05
                </div>
            </header>

            <section className="flex-1 p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-5 flex flex-col gap-16">
                    <div className="group">
                        <label className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 block mb-4 group-focus-within:text-primary transition-colors">Project Title</label>
                        <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-bttr-border focus:ring-0 focus:border-primary px-0 pb-4 text-2xl font-serif tracking-tight placeholder:font-sans placeholder:text-sm placeholder:text-gray-400 placeholder:tracking-normal outline-none" placeholder="Title of your work" type="text" />
                    </div>

                    <div className="group">
                        <label className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 block mb-4 group-focus-within:text-primary transition-colors">Discipline</label>
                        <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-bttr-border focus:ring-0 focus:border-primary px-0 pb-4 text-2xl font-serif tracking-tight placeholder:font-sans placeholder:text-sm placeholder:text-gray-400 placeholder:tracking-normal outline-none" placeholder="Architecture, Objects, Visuals..." type="text" />
                    </div>

                    <div className="group">
                        <label className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 block mb-4 group-focus-within:text-primary transition-colors">Description</label>
                        <textarea className="w-full bg-transparent border-t-0 border-x-0 border-b border-bttr-border focus:ring-0 focus:border-primary px-0 pb-4 text-2xl font-serif tracking-tight placeholder:font-sans placeholder:text-sm placeholder:text-gray-400 placeholder:tracking-normal outline-none resize-none" placeholder="Briefly describe the design intent and authorship..." rows="4"></textarea>
                    </div>

                    <div className="mt-auto pt-10">
                        <div className="flex items-center gap-4 text-gray-600">
                            <span className="material-symbols-outlined text-sm">info</span>
                            <p className="text-[9px] font-medium uppercase tracking-[0.2em] leading-loose">
                                Maximum file size per image: 50MB. <br />
                                Preferred format: TIFF or high-quality JPEG.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col h-full">
                    <div className="flex-1 dashed-border relative flex items-center justify-center group hover:bg-bttr-grey/30 transition-all cursor-pointer min-h-[400px]">
                        <div className="text-center p-12">
                            <div className="mb-8 flex justify-center">
                                <span className="material-symbols-outlined text-4xl text-gray-700 group-hover:text-primary transition-colors">add_circle</span>
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-2">Drag &amp; Drop Assets</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">or click to browse local files</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-end">
                        <button className="bg-primary text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all flex items-center gap-4 shadow-2xl cursor-pointer">
                            Publish Project
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="border-t border-bttr-border p-12 lg:p-20 bg-bttr-black">
                <div className="flex justify-between items-center text-[8px] font-black text-gray-700 uppercase tracking-[0.5em]">
                    <span>© 2026 INSPIRA MEDIA GROUP — UPLOADER V5</span>
                    <div className="flex gap-12">
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Guidelines</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Privacy</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UploadProject;
