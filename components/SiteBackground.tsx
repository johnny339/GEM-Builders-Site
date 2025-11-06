import Header from './Header';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  height?: string;
  backgroundImage?: string;
}

export default function SiteBackground({ 
  title, 
  subtitle, 
  height = 'h-[50vh]',
  backgroundImage = '/vail-home.webp'
}: PageHeroProps) {
  return (
    <>
      {/* Transparent Header - Positioned absolutely over hero */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header transparent={true} />
      </div>

      {/* Hero Section */}
      <section 
        className={`relative ${height} flex items-center justify-center overflow-hidden bg-cover bg-center`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-24 md:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    </>
  );
}