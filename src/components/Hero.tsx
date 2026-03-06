import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ajustamos o Glow para a direita, para destacar o elemento visual que adicionaremos */}
      <div className="absolute top-1/2 right-0 lg:right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(160 84% 44% / 0.4), transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Implementação do Grid: 1 coluna no mobile, 2 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Coluna da Esquerda: Copy e Calls to Action */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-8">
              <Zap size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Soluções sob medida para o seu negócio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Tecnologia que impulsiona sua{" "}
              <span className="text-gradient">produtividade</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Desenvolvemos sistemas inteligentes e personalizados que automatizam processos, 
              eliminam ineficiências e aceleram o crescimento da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contato"
                className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
              >
                Iniciar Projeto
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center mt-8 lg:mt-16">
            <div className="relative w-full max-w-md bg-black/40 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md p-5 overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
              
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-primary/50"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-20 bg-white/5 rounded-lg w-1/3"></div>
                  <div className="h-20 bg-primary/10 rounded-lg w-2/3 border border-primary/20"></div>
                </div>
                <div className="h-4 bg-white/5 rounded w-3/4"></div>
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
                <div className="h-24 bg-white/5 rounded w-full mt-6"></div>
              </div>

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
