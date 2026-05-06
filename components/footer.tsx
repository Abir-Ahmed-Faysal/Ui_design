"use client";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[80vh] md:h-[90vh] bg-[#0A0A0A] z-0 flex flex-col justify-end p-6 md:p-16 pb-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-16 md:mb-32">
          {/* Massive CTA */}
          <div className="flex-1">
            <a 
              href="/contact"
              // #00FF66 is a vibrant, agency-style neon green often used for highlights
              className="text-pure-white text-6xl sm:text-8xl md:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] group transition-colors duration-500 hover:text-[#00FF66] block"
            >
              Start A
              <br />
              Project
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex gap-12 md:gap-24 text-pure-white mt-16 md:mt-0">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold mb-2 text-white/40 uppercase tracking-widest text-xs">Offices</h4>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">London</a>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">Sheffield</a>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">Manchester</a>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">New York</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold mb-2 text-white/40 uppercase tracking-widest text-xs">Socials</h4>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">Instagram</a>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">LinkedIn</a>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">Twitter</a>
              <a href="#" className="text-lg md:text-xl hover:text-[#00FF66] transition-colors">TikTok</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Rise at Seven Clone.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-pure-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pure-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
