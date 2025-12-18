const Footer = () => {
    return (
      <footer className="w-full border-t border-white/10 bg-black/70">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between gap-4 text-zinc-400 text-sm">
          
          {/* Left */}
          <div className="flex items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/206697214?v=4"
              alt="Devraj Singh"
              className="w-9 h-9 rounded-full border border-zinc-700"
            />
            <div>
              <p className="text-zinc-300 font-medium">
                Made by Devraj Singh
              </p>
              <p className="text-xs text-zinc-500">
                Full-stack developer
              </p>
            </div>
          </div>
  
          {/* Right */}
          <div className="flex flex-col sm:items-end gap-1">
            <a
              href="https://github.com/Devraj2Singh"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white transition"
            >
              More projects on GitHub
            </a>
            <a
              href="mailto:devrajs9199@gmail.com"
              className="text-zinc-500 hover:text-zinc-300 transition"
            >
              devrajs9199@gmail.com
            </a>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  