import Link from "next/link";

function Footer () {
  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href="https://www.julioreyes.dev" className="text-slate-300 hover:text-slate-200">
          <h3 className="font-bold text-3xl text-center">www.julioreyes.dev</h3>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;