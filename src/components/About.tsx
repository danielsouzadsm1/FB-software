import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "100%", label: "Foco no seu Projeto" },
  { value: "Ágil", label: "Metodologia de Entrega" },
  { value: "Direto", label: "Atendimento Humanizado" },
  { value: "Inovação", label: "Stack Tecnológico" },
  { value: "99%", label: "Uptime garantido" },
  { value: "Segurança", label: "Proteção de Dados" },
];

const highlights = [
  "Equipe especializada em tecnologias modernas",
  "Metodologias ágeis para entregas rápidas",
  "Suporte contínuo e manutenção proativa",
  "Código limpo, documentado e escalável",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Sobre nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Parceiros estratégicos no seu <span className="text-gradient">crescimento</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A FB Software nasceu com a missão de transformar ideias em soluções tecnológicas 
              de alto impacto. Combinamos inovação com expertise técnica para ajudar empresas 
              a otimizar processos, conectar sistemas e escalar resultados.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-8 lg:mt-14">
            {stats.map((stat) => (
              <div key={stat.label} className="card-glass rounded-xl p-6 text-center hover-lift">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
