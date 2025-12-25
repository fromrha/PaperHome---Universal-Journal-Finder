'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/lib/contexts/LanguageContext';

function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    return (
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-sm">
            <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${language === 'en'
                        ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200'
                        : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                    }`}
            >
                <span className="text-base leading-none">🇬🇧</span>
                <span>EN</span>
            </button>
            <button
                onClick={() => setLanguage('id')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${language === 'id'
                        ? 'bg-white text-red-600 shadow-sm ring-1 ring-slate-200'
                        : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                    }`}
            >
                <span className="text-base leading-none">🇮🇩</span>
                <span>ID</span>
            </button>
        </div>
    );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <AppLayoutContent>{children}</AppLayoutContent>
        </LanguageProvider>
    );
}

function AppLayoutContent({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50">
            {/* Mobile Top Bar */}
            <div className="lg:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
                <div className="flex items-center gap-3">
                    <img
                        src="/logomark.png"
                        alt="PaperHome Logo"
                        className="h-8 w-auto object-contain"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <LanguageToggle />
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Sidebar (Responsive Drawer) */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content */}
            <main className={`flex-1 overflow-y-auto relative bg-slate-50 ${sidebarOpen ? 'overflow-hidden lg:overflow-auto' : ''}`}>

                {/* Desktop Language Toggle (Top Right) */}
                <div className="hidden lg:block absolute top-6 right-8 z-10">
                    <LanguageToggle />
                </div>

                <div className="max-w-7xl mx-auto p-4 lg:p-8 pt-6 lg:pt-10 pb-20">
                    {children}
                </div>
            </main>
        </div>
    );
}
