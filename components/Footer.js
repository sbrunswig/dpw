import Link from "next/link";

function Footer() {
  return (
    <footer className="pt-10">
      <div>
        <div className="bg-[url('/subscribe_background.png')] w-full p-20 flex flex-col justify-center">
          <p className="text-center">Subscribe to important updates from the Cornell Center on the Death Penalty Worldwide</p>
          <form className="flex justify-center w-9/12 m-auto pt-4">
            <input type="text" placeholder="Your Email Address" className="w-9/12 bg-white p-2 m-1" />
            <button className="bg-primary  text-secondary p-2 m-1 hover:bg-redHover">Subscribe</button>
          </form>
        </div>
        <div className="pt-4 w-10/12 m-auto flex flex-col justify-between gap-4 md:flex-row">
          <div className="md:w-8/12 m-auto">
            {/* logos */}
            <div className="flex gap-4 justify-center">
              <img src="./logo_footer_the_atlantic_philantropies2x.png" className="w-20 h-auto"></img>
              <img src="./logo_footer_world_coalition2x.png" className="w-20 h-auto"></img>
              <img src="./logo_footer_EU2x.png" className="w-20 h-auto"></img>
            </div>
            {/* paragraphs */}
            <div className="text-sm pt-4 text-center">
              <p className="p-2">The Death Penalty Worldwide database was created in partnership with the World Coalition Against the Death Penalty and with financial support from the European Union.</p>
              <p className="p-2">The Cornell Center on the Death Penalty Worldwide was founded with a grant from The Atlantic Philanthropies.</p>
            </div>
          </div>
          {/* links */}
          <div className="flex flex-col pt-4 text-center text-sm w-4/12 m-auto gap-1 md:text-right">
            <Link href="/">Home</Link>
            <Link href="/database">Database</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/advocacy">Advocacy</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
            <Link href="/donate">Donate</Link>
          </div>
        </div>
        {/* copywrite */}
        <div className="pt-4 text-center text-sm">
          <p>© 2021 Cornell Center on the Death Penalty Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
