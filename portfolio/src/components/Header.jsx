import profileImg from "../assets/profile.jpg";

const Header = () => {
  return (
    <header className="w-full p-6 bg-gray-100 dark:bg-gray-800 shadow">
      <div className="flex flex-col items-center text-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Mercy Lubanga
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Fullstack Software Engineer passionate about building impactful tech solutions.
        </p>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
  Email: mercylubanga59@gmail.com | Phone: +254 721 934 552
</p>

        {/* Navigation Menu */}
        <nav className="mt-6 space-x-6">
          <a href="#home" className="text-blue-600 hover:underline">Home</a>
          <a href="#projects" className="text-blue-600 hover:underline">Projects</a>
          
        </nav>

        <a
          href="#contact"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
