import React from 'react';

const DesignerProfile = () => {
    return (
        <div className="h-full flex flex-col min-h-screen">
            <section className="relative h-[95vh] w-full overflow-hidden border-b border-bttr-border">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center mono-high-contrast" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJnJcUcpIeEJaD5ucMGRiygLlnC7uIOpkIWXAHID0-dHWu9Lmp-3ai7jxGb8YRNMmB1FGcidY9Dmn7EGXjeUDqUO6Wggeixd1vGZ0YYre7bkBJoo9jmX2C1HyMwV6PZscwy9zAAQxW9_jlcw8t4oZ05VJiHoOj7PUKRqDSPSYtvyLHQ3G770pynwaZtocvBlwVIODEWeh0wlCdLUB91vHD9WC32ns2RlhqQWF5J8amL76va9x0tvslZVFrWohJg4ek-QSwf-FM3xw')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-10 lg:p-20">
                    <div className="max-w-[1400px] w-full">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                            <div className="relative">
                                <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6 block">Featured Author — Profile 04/06</span>
                                <h1 className="text-huge font-serif font-black tracking-tighter -ml-2 uppercase">
                                    Elena<br />Vost
                                </h1>
                            </div>
                            <div className="flex flex-col gap-8 pb-4">
                                <p className="max-w-xs text-[11px] leading-relaxed uppercase tracking-[0.15em] text-gray-400">
                                    A multidisciplinary lead at INSPIRA focused on the raw materiality of brutalist interiors and minimalist form. Based in Berlin.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-primary text-white px-12 py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer">Follow</button>
                                    <button className="border border-gray-700 text-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:border-white transition-all duration-300 cursor-pointer">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-10 lg:p-20">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-bttr-border pb-12">
                    <h2 className="font-serif text-6xl uppercase tracking-tighter">Selected Works</h2>
                    <div className="flex gap-16 text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 mt-8 md:mt-0">
                        <a className="text-primary border-b border-primary pb-1 cursor-pointer" href="#">Index</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Interiors</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Objects</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Editorial</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-1">
                    <div className="lg:col-span-8 group border border-bttr-border bg-bttr-black overflow-hidden p-1 cursor-pointer">
                        <div className="aspect-[16/9] overflow-hidden bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-high-contrast group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvIjPuJoJX3dTn5P1j3e-3yOzU8g21Z969IbBTwaaGFRGOAwDgAkO8vz9X22ZHBGHqkFop9ebyIewYPOlm4cj9ik0gEG8LCrULVtzld5xR4OcHoZUfKzxpGtqVWbM9j_bSSvLEMJM9uH5KHk63-V8aKwVN-zwMqLjoFlBmTlzqmnOcXHxhnwdJtPU7eSXkvRhV48NoF9kFgTruAFzH03vtpiwdwyrK0yyMKG9KrzpTetCI1ruqtec28y-2cOlp7PHHLNF1Ob22ees')" }}></div>
                        </div>
                        <div className="p-8 flex justify-between items-end">
                            <div>
                                <span className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase block mb-2">01 — Architecture</span>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Concrete Monolith</h3>
                            </div>
                            <span className="text-[8px] font-medium tracking-[0.3em] text-gray-500 uppercase pb-1">Winter 2023</span>
                        </div>
                    </div>
                    <div className="lg:col-span-4 group border border-bttr-border bg-bttr-black overflow-hidden p-1 cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-high-contrast group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs8_br8xfzlZ2Vat7ugNLyJOascOoKPhgpOzssHonL7NfyZvoiT565Z3aaYwT8Fnkhyr0W90l-m_c23D1n3OR-UxhUDUb_E-QMnM25pY3NuQHexFt8EbyXidSlAYY_FHVLMwz1QmOQPcJ7CkC2GBFZe9es-wWMXgWZlYMqfrKMrxDMoZguSeneHgodtFpRHivy7NRy-wWiFdYZvYu9l3GMOLxhYf06vvLNybPGGw92UXqO0ZECAir1zG6KHnI0o4pxzPF15OCcU0o')" }}></div>
                        </div>
                        <div className="p-8">
                            <span className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase block mb-2">02 — Object</span>
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Form Study 01</h3>
                            <span className="text-[8px] font-medium tracking-[0.3em] text-gray-500 uppercase">Spring 2024</span>
                        </div>
                    </div>
                    <div className="lg:col-span-4 group border border-bttr-border bg-bttr-black overflow-hidden p-1 cursor-pointer">
                        <div className="aspect-square overflow-hidden bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-high-contrast group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYuHJykwKXThZ5C4j7-KQqX5J6oFIyC-uv1fgxp6yAIu5L6QNseBN_JUs7iy9gv8esudhvXA7ZdaSuhtVExd7KVL7OyJJ6-KS35XPRrkCwAr2qUSCZeNyvdW4hzY0IY6Hck8Lii1uZPwi06o3pKJBksdulF2pMKV9mEBsWrkGoLrD4Zl6f4J49iS53v0ByTndAl24U4Fgfc2ul4gWnz9EYELLWBWzxnEQ3TTqUXhFY0SvzONVqkdunHMV-KyQH00-yy5Z46uhEeCY')" }}></div>
                        </div>
                        <div className="p-8">
                            <span className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase block mb-2">03 — Visual</span>
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Shadow Dialogue</h3>
                            <span className="text-[8px] font-medium tracking-[0.3em] text-gray-500 uppercase">Autumn 2023</span>
                        </div>
                    </div>
                    <div className="lg:col-span-8 group border border-bttr-border bg-bttr-black overflow-hidden p-1 cursor-pointer">
                        <div className="aspect-[16/9] overflow-hidden bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-high-contrast group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTjay5QrUHdjUdkX3QG-dRWYwuVQvQfW2Sa6la_YtP2FRnZO8Tw2HaBuA5H7DwXg4u4vpcRtu_gyD8amc1RyY3-hIf9rwD4YiE4fGKCg7xTYiQoozo1o1TcWvymB1NjAPzkOenw2wRRl_j77MBgybtkSXyQgSNCEBl9WTVtWIuHuHPsO_xtJa7jV4Au70wxXLtRbNTn7r7I24kZSgsnzssMgvyMHtbSWlTmtVVWdOcfKQ9eeueciBzIvH17dMNdawTuFB0tQ5Jc7A')" }}></div>
                        </div>
                        <div className="p-8 flex justify-between items-end">
                            <div>
                                <span className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase block mb-2">04 — Installation</span>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Vortex Pavilion</h3>
                            </div>
                            <span className="text-[8px] font-medium tracking-[0.3em] text-gray-500 uppercase pb-1">Summer 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-bttr-border mt-12 bg-bttr-grey/30">
                <div className="p-10 lg:p-20">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="font-serif text-5xl uppercase tracking-tighter">Curated by Experts</h2>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 flex items-center justify-center border border-bttr-border hover:border-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">west</span>
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center border border-bttr-border hover:border-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">east</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-1 overflow-x-auto no-scrollbar pb-10">
                        <div className="min-w-[450px] bg-bttr-black border border-bttr-border p-12 group cursor-pointer">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-5xl font-black text-white/10 group-hover:text-primary transition-colors duration-500">01</span>
                                <span className="text-[10px] font-bold text-primary tracking-[0.5em] uppercase">Selection A</span>
                            </div>
                            <div className="aspect-[4/3] bg-bttr-grey mb-10 overflow-hidden">
                                <img alt="Collection" className="w-full h-full object-cover mono-high-contrast group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxzTlxAgAHG5ga0c1W9tcCzYdZsc78wLlIL-OYApLbTJF4-Dr6BunL0NJ8v60eevDvOK-Zzwomwio8rXEf1KM7ueKbPc319P_wsnU9ssYPjdNnLRHyeYp_Y_XIoHUW7Fcg8tbQRHrk_qJYXzZqsJNF65uIJHxX62qkPHzFG_7dQ6mKnq6YCFCCeJQrbQwNU-drOOSatGF3N-f4eZSZWMt3lmUZ7OWJq24af_elOujoiwCtMgkiu4e3wtvSzKEs9TU02G8DFdp6JQc" />
                            </div>
                            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">Brutalist Textures</h4>
                            <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase">8 Artifacts / Curated by O. Keller</p>
                        </div>
                        <div className="min-w-[450px] bg-bttr-black border border-bttr-border p-12 group cursor-pointer">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-5xl font-black text-white/10 group-hover:text-primary transition-colors duration-500">02</span>
                                <span className="text-[10px] font-bold text-primary tracking-[0.5em] uppercase">Selection B</span>
                            </div>
                            <div className="aspect-[4/3] bg-bttr-grey mb-10 overflow-hidden">
                                <img alt="Collection" className="w-full h-full object-cover mono-high-contrast group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB7Gt4cgTQf9gGwiA0GQ_FXXxYswds4D5JGFArugqya26U5fnngWXBTrrGpxzWVO-dL6QiGuUt9vArIdQD32wtBQ2LQFk0suc1BhKK2wP4YtE0yoKAbjdK0LMm7317Lv-tOlZA9eUammvXmJShDMJd0NO_mWAxFfRwB_ZXniE5-iA6CCPP8EzjXghlk4XORH3Y-bA5N37b6z9ZnPo1FPKQwDTl8hT81HyFUD2d-Uy3KC5BZ9_jaXaUQz61P6FUGp6UB9Rnsoqqc1Q" />
                            </div>
                            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">Silent Spaces</h4>
                            <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase">12 Artifacts / Curated by S. Chen</p>
                        </div>
                        <div className="min-w-[450px] bg-bttr-black border border-bttr-border p-12 group cursor-pointer">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-5xl font-black text-white/10 group-hover:text-primary transition-colors duration-500">03</span>
                                <span className="text-[10px] font-bold text-primary tracking-[0.5em] uppercase">Selection C</span>
                            </div>
                            <div className="aspect-[4/3] bg-bttr-grey mb-10 overflow-hidden">
                                <img alt="Collection" className="w-full h-full object-cover mono-high-contrast group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjay5QrUHdjUdkX3QG-dRWYwuVQvQfW2Sa6la_YtP2FRnZO8Tw2HaBuA5H7DwXg4u4vpcRtu_gyD8amc1RyY3-hIf9rwD4YiE4fGKCg7xTYiQoozo1o1TcWvymB1NjAPzkOenw2wRRl_j77MBgybtkSXyQgSNCEBl9WTVtWIuHuHPsO_xtJa7jV4Au70wxXLtRbNTn7r7I24kZSgsnzssMgvyMHtbSWlTmtVVWdOcfKQ9eeueciBzIvH17dMNdawTuFB0tQ5Jc7A" />
                            </div>
                            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">Monochrome Vision</h4>
                            <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase">5 Artifacts / Curated by E. Vost</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-bttr-border p-10 lg:p-20 bg-bttr-black">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-6">
                        <div className="text-primary font-black text-3xl tracking-tighter mb-10">C</div>
                        <p className="text-[10px] uppercase tracking-[0.4em] leading-[2] text-gray-500 max-w-sm">
                            The ultra-minimalist professional standard for design authorship. Ethical curation, extreme precision. Established 2024.
                        </p>
                    </div>
                    <div className="lg:col-span-3">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/40">Navigation</h5>
                        <ul className="flex flex-col gap-6 text-[9px] font-bold text-gray-400 uppercase tracking-[0.4em]">
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Journal</a></li>
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Profiles</a></li>
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Archives</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/40">Dispatch</h5>
                        <div className="border-b border-bttr-border pb-4 mb-8">
                            <input className="bg-transparent border-none focus:ring-0 text-[10px] w-full p-0 tracking-[0.4em] uppercase placeholder:text-gray-800 text-white outline-none" placeholder="EMAIL ADDRESS" type="email" />
                        </div>
                        <button className="text-primary font-black text-[10px] tracking-[0.6em] uppercase hover:text-white transition-colors cursor-pointer">Join Society</button>
                    </div>
                </div>
                <div className="mt-40 pt-12 border-t border-bttr-border flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] font-bold text-gray-600 uppercase tracking-[0.6em]">
                    <span>© 2026 INSPIRA PROJECTS BUREAU</span>
                    <div className="flex gap-12">
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Terms of Service</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DesignerProfile;
