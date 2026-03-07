import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="card-glass rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(160 84% 44% / 0.5), transparent 70%)" }} />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Pronto para transformar sua <span className="text-gradient">ideia em realidade</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Entre em contato e descubra como podemos acelerar os resultados do seu negócio com tecnologia de ponta.
            </p>
            <a
              href="https://www.instagram.com/daniels.menezes/"
              target="_blank"
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-2 rounded-lg bg-[#1DD6BF] px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
            >
              Fale com a gente
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
