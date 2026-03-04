const Home = () => {
    return (
        <>
            <section className="relative h-[90vh] w-full overflow-hidden border-b border-bttr-border">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center mono-img" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJnJcUcpIeEJaD5ucMGRiygLlnC7uIOpkIWXAHID0-dHWu9Lmp-3ai7jxGb8YRNMmB1FGcidY9Dmn7EGXjeUDqUO6Wggeixd1vGZ0YYre7bkBJoo9jmX2C1HyMwV6PZscwy9zAAQxW9_jlcw8t4oZ05VJiHoOj7PUKRqDSPSYtvyLHQ3G770pynwaZtocvBlwVIODEWeh0wlCdLUB91vHD9WC32ns2RlhqQWF5J8amL76va9x0tvslZVFrWohJg4ek-QSwf-FM3xw')" }}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-12 lg:p-20">
                    <div className="max-w-7xl">
                        <span className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Author Spotlight — 01</span>
                        <h1 className="text-huge font-serif font-black tracking-tighter -ml-2 mb-8 uppercase">
                            The<br />Architect
                        </h1>
                        <div className="flex items-end justify-between">
                            <p className="max-w-sm text-gray-300 text-sm leading-relaxed uppercase tracking-wider font-medium">
                                Elena Vost explores the intersection of raw concrete and minimalist human experience.
                            </p>
                            <div className="flex gap-1">
                                <button className="bg-primary text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-colors cursor-pointer">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-12 lg:p-20">
                <div className="flex justify-between items-baseline mb-20 border-b border-bttr-border pb-10">
                    <h2 className="font-serif text-5xl uppercase tracking-tighter">Editorial Feed</h2>
                    <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
                        <a className="text-primary cursor-pointer" href="#">All Works</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Architecture</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Objects</a>
                        <a className="hover:text-white transition-colors cursor-pointer" href="#">Visuals</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-bttr-border border border-bttr-border">
                    <div className="bg-bttr-black p-10 group hover:bg-bttr-grey transition-colors cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden mb-10 bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-img grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvIjPuJoJX3dTn5P1j3e-3yOzU8g21Z969IbBTwaaGFRGOAwDgAkO8vz9X22ZHBGHqkFop9ebyIewYPOlm4cj9ik0gEG8LCrULVtzld5xR4OcHoZUfKzxpGtqVWbM9j_bSSvLEMJM9uH5KHk63-V8aKwVN-zwMqLjoFlBmTlzqmnOcXHxhnwdJtPU7eSXkvRhV48NoF9kFgTruAFzH03vtpiwdwyrK0yyMKG9KrzpTetCI1ruqtec28y-2cOlp7PHHLNF1Ob22ees')" }}></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <span className="text-[9px] font-black tracking-[0.2em] text-primary">01</span>
                                <span className="text-[9px] font-black tracking-[0.2em] text-gray-500 uppercase">Architecture</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Monolith House</h3>
                            <div className="flex items-center justify-between border-t border-bttr-border pt-4 mt-2">
                                <span className="text-[9px] font-medium tracking-[0.2em] text-gray-400 uppercase">Julian Rossi</span>
                                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-bttr-black p-10 group hover:bg-bttr-grey transition-colors cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden mb-10 bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-img grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs8_br8xfzlZ2Vat7ugNLyJOascOoKPhgpOzssHonL7NfyZvoiT565Z3aaYwT8Fnkhyr0W90l-m_c23D1n3OR-UxhUDUb_E-QMnM25pY3NuQHexFt8EbyXidSlAYY_FHVLMwz1QmOQPcJ7CkC2GBFZe9es-wWMXgWZlYMqfrKMrxDMoZguSeneHgodtFpRHivy7NRy-wWiFdYZvYu9l3GMOLxhYf06vvLNybPGGw92UXqO0ZECAir1zG6KHnI0o4pxzPF15OCcU0o')" }}></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <span className="text-[9px] font-black tracking-[0.2em] text-primary">02</span>
                                <span className="text-[9px] font-black tracking-[0.2em] text-gray-500 uppercase">Fashion</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Avant-Garde Drape</h3>
                            <div className="flex items-center justify-between border-t border-bttr-border pt-4 mt-2">
                                <span className="text-[9px] font-medium tracking-[0.2em] text-gray-400 uppercase">Sora Oh</span>
                                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-bttr-black p-10 group hover:bg-bttr-grey transition-colors cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden mb-10 bg-bttr-grey">
                            <div className="w-full h-full bg-cover bg-center mono-img grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYuHJykwKXThZ5C4j7-KQqX5J6oFIyC-uv1fgxp6yAIu5L6QNseBN_JUs7iy9gv8esudhvXA7ZdaSuhtVExd7KVL7OyJJ6-KS35XPRrkCwAr2qUSCZeNyvdW4hzY0IY6Hck8Lii1uZPwi06o3pKJBksdulF2pMKV9mEBsWrkGoLrD4Zl6f4J49iS53v0ByTndAl24U4Fgfc2ul4gWnz9EYELLWBWzxnEQ3TTqUXhFY0SvzONVqkdunHMV-KyQH00-yy5Z46uhEeCY')" }}></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <span className="text-[9px] font-black tracking-[0.2em] text-primary">03</span>
                                <span className="text-[9px] font-black tracking-[0.2em] text-gray-500 uppercase">Industrial</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Form 01</h3>
                            <div className="flex items-center justify-between border-t border-bttr-border pt-4 mt-2">
                                <span className="text-[9px] font-medium tracking-[0.2em] text-gray-400 uppercase">Marc Newson</span>
                                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-bttr-border mt-20">
                <div className="p-12 lg:p-20">
                    <h2 className="font-serif text-5xl uppercase tracking-tighter mb-16">Curated Collections</h2>
                    <div className="flex gap-1 overflow-x-auto no-scrollbar">
                        <div className="min-w-[400px] border border-bttr-border bg-bttr-black p-12 relative cursor-pointer">
                            <span className="text-8xl font-black text-white/5 absolute top-4 right-8 select-none">01</span>
                            <div className="relative z-10">
                                <span className="text-[9px] font-black text-primary tracking-[0.4em] uppercase mb-6 block">Selection</span>
                                <div className="aspect-square bg-bttr-grey mb-8 overflow-hidden">
                                    <img alt="Selection" className="w-full h-full object-cover mono-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjay5QrUHdjUdkX3QG-dRWYwuVQvQfW2Sa6la_YtP2FRnZO8Tw2HaBuA5H7DwXg4u4vpcRtu_gyD8amc1RyY3-hIf9rwD4YiE4fGKCg7xTYiQoozo1o1TcWvymB1NjAPzkOenw2wRRl_j77MBgybtkSXyQgSNCEBl9WTVtWIuHuHPsO_xtJa7jV4Au70wxXLtRbNTn7r7I24kZSgsnzssMgvyMHtbSWlTmtVVWdOcfKQ9eeueciBzIvH17dMNdawTuFB0tQ5Jc7A" />
                                </div>
                                <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">The Shadow Play</h4>
                                <p className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">12 Works by 4 Creators</p>
                            </div>
                        </div>
                        <div className="min-w-[400px] border border-bttr-border bg-bttr-black p-12 relative cursor-pointer">
                            <span className="text-8xl font-black text-white/5 absolute top-4 right-8 select-none">02</span>
                            <div className="relative z-10">
                                <span className="text-[9px] font-black text-primary tracking-[0.4em] uppercase mb-6 block">Selection</span>
                                <div className="aspect-square bg-bttr-grey mb-8 overflow-hidden">
                                    <img alt="Selection" className="w-full h-full object-cover mono-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxzTlxAgAHG5ga0c1W9tcCzYdZsc78wLlIL-OYApLbTJF4-Dr6BunL0NJ8v60eevDvOK-Zzwomwio8rXEf1KM7ueKbPc319P_wsnU9ssYPjdNnLRHyeYp_Y_XIoHUW7Fcg8tbQRHrk_qJYXzZqsJNF65uIJHxX62qkPHzFG_7dQ6mKnq6YCFCCeJQrbQwNU-drOOSatGF3N-f4eZSZWMt3lmUZ7OWJq24af_elOujoiwCtMgkiu4e3wtvSzKEs9TU02G8DFdp6JQc" />
                                </div>
                                <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">Future Human</h4>
                                <p className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">08 Works by 2 Creators</p>
                            </div>
                        </div>
                        <div className="min-w-[400px] border border-bttr-border bg-bttr-black p-12 relative cursor-pointer">
                            <span className="text-8xl font-black text-white/5 absolute top-4 right-8 select-none">03</span>
                            <div className="relative z-10">
                                <span className="text-[9px] font-black text-primary tracking-[0.4em] uppercase mb-6 block">Selection</span>
                                <div className="aspect-square bg-bttr-grey mb-8 overflow-hidden">
                                    <img alt="Selection" className="w-full h-full object-cover mono-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB7Gt4cgTQf9gGwiA0GQ_FXXxYswds4D5JGFArugqya26U5fnngWXBTrrGpxzWVO-dL6QiGuUt9vArIdQD32wtBQ2LQFk0suc1BhKK2wP4YtE0yoKAbjdK0LMm7317Lv-tOlZA9eUammvXmJShDMJd0NO_mWAxFfRwB_ZXniE5-iA6CCPP8EzjXghlk4XORH3Y-bA5N37b6z9ZnPo1FPKQwDTl8hT81HyFUD2d-Uy3KC5BZ9_jaXaUQz61P6FUGp6UB9Rnsoqqc1Q" />
                                </div>
                                <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">Quiet Objects</h4>
                                <p className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">15 Works by 6 Creators</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-bttr-border p-12 lg:p-20 bg-bttr-black mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-4">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center mb-10">
                            <span className="text-white font-black text-xl tracking-tighter">C</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed text-gray-500 max-w-xs">
                            Professional design platform focusing on multidisciplinary creative excellence and authorship.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white">Market</h5>
                        <ul className="flex flex-col gap-6 text-[9px] font-medium text-gray-500 uppercase tracking-[0.3em]">
                            <li><a className="hover:text-primary transition-colors" href="#">Licenses</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Editions</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Prints</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white">Bureau</h5>
                        <ul className="flex flex-col gap-6 text-[9px] font-medium text-gray-500 uppercase tracking-[0.3em]">
                            <li><a className="hover:text-primary transition-colors" href="#">Journal</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Board</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Talks</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-4">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white">Dispatch</h5>
                        <div className="border-b border-bttr-border pb-4 mb-6 relative">
                            <input className="bg-transparent border-none focus:ring-0 text-[10px] w-[90%] p-0 tracking-[0.3em] uppercase placeholder:text-gray-700 outline-none" placeholder="ENTER EMAIL" type="email" />
                            <button className="text-primary font-black text-[10px] tracking-[0.5em] uppercase hover:text-white transition-colors absolute right-0 bottom-4 cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="mt-32 pt-10 border-t border-bttr-border flex justify-between text-[8px] font-black text-gray-700 uppercase tracking-[0.5em]">
                    <span>© 2026 INSPIRA MEDIA GROUP — EST. 2024</span>
                    <div className="flex gap-12">
                        <a href="#">Terms</a>
                        <a href="#">Legal</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
