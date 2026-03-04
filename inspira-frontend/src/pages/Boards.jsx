import React from 'react';

const Boards = () => {
    return (
        <div className="h-full flex flex-col min-h-screen">
            <header className="p-12 lg:p-20 border-b border-bttr-border flex justify-between items-end">
                <div>
                    <span className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Archive — 02</span>
                    <h1 className="text-huge font-serif font-black tracking-tighter -ml-2 uppercase">Saved<br />Boards</h1>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <span className="block text-[9px] font-black text-gray-500 tracking-[0.3em] uppercase mb-2">Capacity</span>
                        <span className="block text-xl font-bold tracking-tighter text-white">12 / 50</span>
                    </div>
                    <button className="w-16 h-16 border border-bttr-border hover:border-white transition-colors flex items-center justify-center group cursor-pointer">
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">add</span>
                    </button>
                </div>
            </header>

            <section className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bttr-border">
                <div className="group relative bg-bttr-black aspect-square overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <img alt="Brutalism - Warm Terracotta Structure" className="w-full h-full object-cover vibrant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJnJcUcpIeEJaD5ucMGRiygLlnC7uIOpkIWXAHID0-dHWu9Lmp-3ai7jxGb8YRNMmB1FGcidY9Dmn7EGXjeUDqUO6Wggeixd1vGZ0YYre7bkBJoo9jmX2C1HyMwV6PZscwy9zAAQxW9_jlcw8t4oZ05VJiHoOj7PUKRqDSPSYtvyLHQ3G770pynwaZtocvBlwVIODEWeh0wlCdLUB91vHD9WC32ns2RlhqQWF5J8amL76va9x0tvslZVFrWohJg4ek-QSwf-FM3xw" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-8xl font-black text-white/30 tracking-tighter">01</span>
                            <span className="text-[9px] font-black tracking-[0.3em] text-white/80">34 ITEMS</span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-2 text-white shadow-black/20 text-shadow">Brutalism</h2>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-white uppercase">Curated by Vost</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-bttr-black aspect-square overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <img alt="Typography - High-end Color Design" className="w-full h-full object-cover vibrant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvIjPuJoJX3dTn5P1j3e-3yOzU8g21Z969IbBTwaaGFRGOAwDgAkO8vz9X22ZHBGHqkFop9ebyIewYPOlm4cj9ik0gEG8LCrULVtzld5xR4OcHoZUfKzxpGtqVWbM9j_bSSvLEMJM9uH5KHk63-V8aKwVN-zwMqLjoFlBmTlzqmnOcXHxhnwdJtPU7eSXkvRhV48NoF9kFgTruAFzH03vtpiwdwyrK0yyMKG9KrzpTetCI1ruqtec28y-2cOlp7PHHLNF1Ob22ees" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-8xl font-black text-white/30 tracking-tighter">02</span>
                            <span className="text-[9px] font-black tracking-[0.3em] text-white/80">128 ITEMS</span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-2 text-white">Typography</h2>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-white uppercase">Curated by Rossi</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-bttr-black aspect-square overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <img alt="Fashion - Cobalt Blue Textile" className="w-full h-full object-cover vibrant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs8_br8xfzlZ2Vat7ugNLyJOascOoKPhgpOzssHonL7NfyZvoiT565Z3aaYwT8Fnkhyr0W90l-m_c23D1n3OR-UxhUDUb_E-QMnM25pY3NuQHexFt8EbyXidSlAYY_FHVLMwz1QmOQPcJ7CkC2GBFZe9es-wWMXgWZlYMqfrKMrxDMoZguSeneHgodtFpRHivy7NRy-wWiFdYZvYu9l3GMOLxhYf06vvLNybPGGw92UXqO0ZECAir1zG6KHnI0o4pxzPF15OCcU0o" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-8xl font-black text-white/30 tracking-tighter">03</span>
                            <span className="text-[9px] font-black tracking-[0.3em] text-white/80">86 ITEMS</span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-2 text-white">Fashion</h2>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-white uppercase">Curated by Sora Oh</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-bttr-black aspect-square overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <img alt="Objects - Forest Green Chair" className="w-full h-full object-cover vibrant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYuHJykwKXThZ5C4j7-KQqX5J6oFIyC-uv1fgxp6yAIu5L6QNseBN_JUs7iy9gv8esudhvXA7ZdaSuhtVExd7KVL7OyJJ6-KS35XPRrkCwAr2qUSCZeNyvdW4hzY0IY6Hck8Lii1uZPwi06o3pKJBksdulF2pMKV9mEBsWrkGoLrD4Zl6f4J49iS53v0ByTndAl24U4Fgfc2ul4gWnz9EYELLWBWzxnEQ3TTqUXhFY0SvzONVqkdunHMV-KyQH00-yy5Z46uhEeCY" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-8xl font-black text-white/30 tracking-tighter">04</span>
                            <span className="text-[9px] font-black tracking-[0.3em] text-white/80">52 ITEMS</span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-2 text-white">Objects</h2>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-white uppercase">Curated by Newson</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-bttr-black aspect-square overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <img alt="Minimalism - Vibrant Modern Art" className="w-full h-full object-cover vibrant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjay5QrUHdjUdkX3QG-dRWYwuVQvQfW2Sa6la_YtP2FRnZO8Tw2HaBuA5H7DwXg4u4vpcRtu_gyD8amc1RyY3-hIf9rwD4YiE4fGKCg7xTYiQoozo1o1TcWvymB1NjAPzkOenw2wRRl_j77MBgybtkSXyQgSNCEBl9WTVtWIuHuHPsO_xtJa7jV4Au70wxXLtRbNTn7r7I24kZSgsnzssMgvyMHtbSWlTmtVVWdOcfKQ9eeueciBzIvH17dMNdawTuFB0tQ5Jc7A" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-8xl font-black text-white/30 tracking-tighter">05</span>
                            <span className="text-[9px] font-black tracking-[0.3em] text-white/80">21 ITEMS</span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-2 text-white">Minimalism</h2>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-white uppercase">Curated by Cosmos</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-bttr-black aspect-square overflow-hidden cursor-pointer border-2 border-dashed border-bttr-border hover:border-white transition-colors">
                    <div className="h-full flex flex-col items-center justify-center text-center p-10">
                        <span className="material-symbols-outlined text-6xl text-gray-700 group-hover:text-white transition-colors mb-4">add</span>
                        <span className="text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">Create New Board</span>
                    </div>
                </div>
            </section>

            <footer className="border-t border-bttr-border p-12 lg:p-20 bg-bttr-black">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
                    <div className="flex flex-col gap-8">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center">
                            <span className="text-white font-black text-lg tracking-tighter">C</span>
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 max-w-xs leading-loose">
                            Professional archive for multidisciplinary creative excellence.
                        </p>
                    </div>
                    <div className="flex gap-20">
                        <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">Access</h5>
                            <ul className="flex flex-col gap-4 text-[9px] font-medium text-gray-500 uppercase tracking-[0.3em]">
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Shared</a></li>
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Private</a></li>
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Trash</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">Legal</h5>
                            <ul className="flex flex-col gap-4 text-[9px] font-medium text-gray-500 uppercase tracking-[0.3em]">
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Privacy</a></li>
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Terms</a></li>
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Export</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-bttr-border flex justify-between text-[8px] font-black text-gray-700 uppercase tracking-[0.5em]">
                    <span>© 2026 INSPIRA MEDIA — BOARD MGMT</span>
                    <span>COLOR CURATION SERIES</span>
                </div>
            </footer>
        </div>
    );
};

export default Boards;
