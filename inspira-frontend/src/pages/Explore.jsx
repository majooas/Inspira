import React from 'react';

const Explore = () => {
    return (
        <div className="h-full w-full overflow-hidden bg-bttr-black">
            <div className="h-[90vh] overflow-y-auto no-scrollbar relative w-full px-10 pt-10">
                <header className="px-12 py-8 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary">Chroma Collection</span>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Fashion — Vol. 25</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="material-symbols-outlined text-gray-400 hover:text-white transition-colors cursor-pointer">grid_view</button>
                        <button className="material-symbols-outlined text-gray-400 hover:text-white transition-colors cursor-pointer">sort</button>
                    </div>
                </header>

                <section className="px-16 py-16">
                    <div className="masonry-grid max-w-7xl mx-auto">
                        <div className="masonry-item group cursor-pointer">
                            <div className="relative overflow-hidden aspect-[3/4] mb-6">
                                <img alt="Avant-garde Crimson Dress" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWpzni2KJJODQXH3Nl_p4lDUwhYyZkJw215atMq5PubNEVinnE999YSAyf2T_4tnBbPtz-plQ53fACFcI3pk435tx_-zY-TPzvAM_aKJRHfN5M4TeSZc-Bq2HvIbbfoyQ6gUlODrFDgrrrgfoMxOBRz-sGCx3XUpHRxYxnrYc0iU24jF5Mv-hUYxonzL8Kw4RIO1sFJo94ZQvV4IBIKJtiVlJGcs_9Mj21dd-6GwRhroHCE4-PJ83gE9usohFsh54i71P_frSU4Wc" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-white">Crimson Avant-Garde</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">High-Fidelity Editorial</p>
                                </div>
                                <span className="text-[10px] font-black text-primary">02.1</span>
                            </div>
                        </div>
                        <div className="masonry-item group cursor-pointer pt-20">
                            <div className="relative overflow-hidden aspect-[4/5] mb-6">
                                <img alt="Emerald Green Couture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoBwA5idH1LONcFjMmKN5qC7_SunBArpcB8bkQ3SIqgrBuEPw7rZgmDZJtr5CP351QCVcYJVytOA0vcOIWTAZJR0uumMob2WFfu7UuONXfTo048XtO_6_OV9nAH7bLhWBofBKbtUTTsl69TWkCPLJ0vMSRjqZq9fsidXzLgTw2A8HUkeyFUW_emPZ6uxSPNCYOYV0wCfnNutBoDXuLv-LSAtomEN0ua4SFErRRBk2V_Nz_qpZ47Vz5Ez45mP6yqjD6sf1QjupQ7A0" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-white">Emerald Synthesis</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Luxury Textile Study</p>
                                </div>
                                <span className="text-[10px] font-black text-primary">02.2</span>
                            </div>
                        </div>
                        <div className="masonry-item group cursor-pointer">
                            <div className="relative overflow-hidden aspect-square mb-6">
                                <img alt="Cobalt Fashion Posing" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbBaAEiDEkDEYM0O71kLh2VEOnMsG890G9GF4rgD75gpBcKkKsNYOuZxfGdruwIVNkbBYum19BveU3_gX8X8U6v1OQPCq2Qpbb0JH6yjMk1mGLP7hf2B85uLTSBokZ1XZ2TP3H7DfSJiBDyhq6Idbgmk4_9YU01_7tR_DeOdziSkVt5bisG4TB_x0Z6P1oHjN8WxDVNQAdW3X0Sm0b04AdNm6tpvl-daYz7iZpdWuGUT4RPkbKyT8MNAfPvB7A2O7DwGUSw1buxo" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-white">Cobalt Narrative</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Editorial Portfolio</p>
                                </div>
                                <span className="text-[10px] font-black text-primary">02.3</span>
                            </div>
                        </div>
                        <div className="masonry-item group cursor-pointer">
                            <div className="relative overflow-hidden aspect-[2/3] mb-6">
                                <img alt="Sunset Ochre Fashion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTLTcPy6RD_aw56zkkryCNYUb_gPTMc0H3CYUikAfK5UIlW5VKXoFFkwIdi4kG83UPzWQlSXiiQZlgEWd-bth2rGNdfY7zIQozyuipDN4Uat6uE9lpF12k_tJ0RK_w36x9q6zySRkpU5w6KWrmwpee69AA4JjZRa9b8fPw2KSqyFIpxacYjhq1v6f-sjsj4hvQOG5idR0wz3FoR9Ay86ZKmiPb8JFKrXWwNS9j8zPdq9mooK3l-TQKJryNrA-JBlROVcTPxrC_WTQ" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-white">Ochre Luminescence</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Seasonal Material Analysis</p>
                                </div>
                                <span className="text-[10px] font-black text-primary">02.4</span>
                            </div>
                        </div>
                        <div className="masonry-item group cursor-pointer pt-12">
                            <div className="relative overflow-hidden aspect-[4/5] mb-6">
                                <img alt="Violet Structural Couture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldwPizoGsoR0w4DVyhevKt_zHkEQhtBVfFNpUWoaoEYDWVnOdZ3MGsBDwWLgmmzuQ497t3XgwroX5M6rWSBHjTWsMH-YUm5R9H21ozSACTmCln1v_st6IDYcQEP2n-tBeSnyd9ub7ueGDLQILkjXJtl2NOVTLyhi8_4fXPF0BU5oZFeLxIuKwWMZ6HTW50fLYMOf0hRllxLVBX2Eb0PSgCBWdqkZCm_ACIbKuwfQdXrifnIMiAT_wi5sxHdyEo0pBHPo7Kz9eKNo" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-white">Violet Architecture</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Structural Form Concept</p>
                                </div>
                                <span className="text-[10px] font-black text-primary">02.5</span>
                            </div>
                        </div>
                    </div>

                    <footer className="mt-40 border-t border-bttr-border pt-12 pb-24 flex justify-between items-end">
                        <div className="max-w-xs">
                            <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed text-gray-500">
                                High-fidelity chroma archive. All rights reserved by Cosmos Design Platform.
                            </p>
                        </div>
                        <div className="flex gap-16 text-[9px] font-black text-gray-600 uppercase tracking-[0.4em]">
                            <span className="text-white">Active Category: Fashion Chroma</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Load More Works +</span>
                        </div>
                    </footer>
                </section>
            </div>
        </div>
    );
};

export default Explore;
