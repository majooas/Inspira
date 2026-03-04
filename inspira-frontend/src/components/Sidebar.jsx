import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path) => {
        if (path === '/') return currentPath === '/';
        return currentPath.startsWith(path);
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-16 border-r border-bttr-border bg-bttr-black z-50 flex flex-col items-center py-10">
            <div className="mb-16">
                <Link to="/" className="w-8 h-8 bg-primary flex items-center justify-center">
                    <span className="text-white font-black text-lg tracking-tighter">C</span>
                </Link>
            </div>
            <nav className="flex flex-col gap-10 flex-1">
                <Link to="/" className={`sidebar-item group flex flex-col items-center gap-2`} title="Home">
                    <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${isActive('/') ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>home</span>
                </Link>
                <Link to="/explore" className={`sidebar-item group flex flex-col items-center gap-2`} title="Explore">
                    <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${isActive('/explore') ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>grid_view</span>
                </Link>
                <Link to="/boards" className={`sidebar-item group flex flex-col items-center gap-2`} title="Boards">
                    <span className={`material-symbols-outlined text-xl transition-all duration-300 ${isActive('/boards') ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>favorite</span>
                </Link>
                <Link to="/contact" className={`sidebar-item group flex flex-col items-center gap-2`} title="Contact">
                    <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${isActive('/contact') ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>chat_bubble</span>
                </Link>
                <Link to="/upload" className={`sidebar-item group flex flex-col items-center gap-2`} title="Upload Project">
                    <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${isActive('/upload') ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>add_circle</span>
                </Link>
            </nav>
            <div className="mt-auto">
                <Link to="/profile" className={`sidebar-item group cursor-pointer`} title="Profile">
                    <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${isActive('/profile') ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>person</span>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
