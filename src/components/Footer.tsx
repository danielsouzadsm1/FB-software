import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
              <img 
                  src="/fb_logo_footer.png" 
                  alt="FB Software Logo" 
                  className="h-9 w-auto object-contain -ml-2"
                />
            <p className="text-xs text-muted-foreground mt-1">
              Tecnologia que transforma negócios.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a> */}
            <a href="https://www.instagram.com/fbsoftware.com.br/"
              target="_blank"    
              className="text-muted-foreground hover:text-foreground transition-colors" 
              aria-label="Instagram">
              <Instagram size={18} />
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a> */}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FB Software. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
