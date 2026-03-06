import { Code2, Globe, Smartphone, Database, Shield, Gauge } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Software Sob Medida",
    description: "Sistemas desenvolvidos do zero para atender às necessidades exclusivas do seu negócio.",
  },
  {
    icon: Globe,
    title: "Aplicações Web",
    description: "Plataformas modernas, rápidas e escaláveis com as melhores tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos com experiência fluida em iOS e Android.",
  },
  {
    icon: Database,
    title: "Integrações & APIs",
    description: "Conectamos seus sistemas para automatizar fluxos e eliminar retrabalho.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Arquitetura robusta com práticas de segurança em cada camada da aplicação.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Otimização contínua para garantir velocidade e eficiência em escala.",
  },
];

const Features = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Soluções completas para sua <span className="text-gradient">transformação digital</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Da ideia à entrega, cuidamos de cada etapa com excelência técnica e foco em resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-glass rounded-xl p-6 hover-lift group cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/20">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
