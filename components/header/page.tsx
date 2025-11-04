export default function header()
{
    return(

<nav className="w-full bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 hover:text-indigo-500 transition">
          Adrien<span className="text-indigo-500">Dev</span>
        </h1>

        {/* Liens */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-500 transition">Accueil</a>
          <a href="#about" className="hover:text-indigo-500 transition">À propos</a>
          <a href="#portfolio" className="hover:text-indigo-500 transition">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
        </div>

        {/* Bouton */}
        <button className="bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition">
          Me Contacter
        </button>
      </div>
    </nav>
    )
}