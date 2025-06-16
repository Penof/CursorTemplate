import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 dark:from-[#0f172a] dark:to-[#1e293b]">
      {/* Header */}
      <header className="w-full py-6 px-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-300">NextLanding</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Fonctionnalités</a>
          <a href="#about" className="hover:text-blue-600 transition">À propos</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        <a href="#cta" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">Commencer</a>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-6">
          Bienvenue sur NextLanding
        </h1>
        <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mb-8">
          Une landing page Next.js moderne, élégante et responsive, prête à impressionner vos visiteurs.
        </p>
        <a href="#cta" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg">Essayez maintenant</a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white dark:bg-[#1e293b]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 dark:text-blue-300">Fonctionnalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-[#334155] rounded-xl p-6 shadow text-center">
              <Image src="/file.svg" alt="Facile" width={40} height={40} className="mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Facile à utiliser</h3>
              <p className="text-gray-600 dark:text-gray-300">Prenez en main la page en quelques minutes grâce à une structure claire et moderne.</p>
            </div>
            <div className="bg-blue-50 dark:bg-[#334155] rounded-xl p-6 shadow text-center">
              <Image src="/window.svg" alt="Responsive" width={40} height={40} className="mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Responsive</h3>
              <p className="text-gray-600 dark:text-gray-300">Un design qui s&#39;adapte parfaitement à tous les écrans, du mobile au desktop.</p>
            </div>
            <div className="bg-blue-50 dark:bg-[#334155] rounded-xl p-6 shadow text-center">
              <Image src="/globe.svg" alt="Moderne" width={40} height={40} className="mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Moderne & élégant</h3>
              <p className="text-gray-600 dark:text-gray-300">Des couleurs douces, une typographie soignée et une expérience utilisateur agréable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">À propos</h2>
        <p className="text-gray-700 dark:text-gray-200 text-lg">
          Ce template est conçu pour vous permettre de démarrer rapidement avec Next.js et Tailwind CSS. Il met l&#39;accent sur la simplicité, la rapidité et la beauté du design.
        </p>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à vous lancer ?</h2>
        <p className="mb-8 text-lg">Créez votre site moderne en quelques clics.</p>
        <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition text-lg">Commencer maintenant</a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm mt-auto">
        © {new Date().getFullYear()} NextLanding. Propulsé par Next.js.
      </footer>
    </div>
  );
}
