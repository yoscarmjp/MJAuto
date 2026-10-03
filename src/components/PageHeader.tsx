interface PageHeaderProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
    return (
        <div className="relative w-full overflow-hidden bg-gray-900 py-24 mb-12">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gray-900/80 z-10" />
                <img src="../../background.webp" alt="Background" className="w-full h-full object-cover opacity-40" />
            </div>
            
            <div className="relative z-20 mx-auto max-w-[1700px] px-6 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                {subtitle && <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">{subtitle}</p>}
                {children}
            </div>
        </div>
    );
}
