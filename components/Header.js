function Header() {
  return (
    <header>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <img src="./logo_header_cornell.svg" alt="Cornell Center on the Death Penalty Worldwide" />
          </div>
          <div className="w-6/12 flex">
            <input className="w-full bg-secondary p-2 m-1" type="text" placeholder="Search Cornell Center on Death Penalty Website" />
            <button className="bg-primary  text-secondary p-2 m-1 hover:bg-redHover w-1/12">
              <svg class="h-5 w-5 fill-white m-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between gap-4">
            <button>FR</button>
            <button className="bg-primary p-2 text-white hover:bg-redHover">DONATE</button>
            <button className="border-solid border-primary border-4 p-2 w-16 h-16 hover:border-redHover">
              <img src="./ic_accessibilityb64e4bb8.svg" alt="accessibility menu" className="m-auto"></img>
            </button>
          </div>
        </div>
        <nav className="flex justify-between w-8/12 m-auto pt-2">
          <a href="/" className="p-4">
            Home
          </a>
          <a href="/database" className="p-4">
            Database
          </a>
          <a href="/projects" className="p-4">
            Projects
          </a>
          <a href="/advocacy" className="p-4">
            Advocacy
          </a>
          <a href="/publications" className="p-4">
            Publications
          </a>
          <a href="/blog" className="p-4">
            Blog
          </a>
          <a href="/about" className="p-4">
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
