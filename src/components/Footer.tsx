export default function Footer() {
  return (
    <section>
      <footer className="bg-white text-black mb-6 pb-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Next-W-Invitation. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Designed with ❤️ by <a href="https://github.com/omar-rahmat" className="text-zinc-500 font-bahasaFont text-[22px] font-bold">Fynrizky</a>
          </p>
        </div>
      </footer>
    </section>
  );
}