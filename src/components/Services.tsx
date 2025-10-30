import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp, Globe, Smartphone, Cpu } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transforme dados brutos em insights acionáveis com dashboards interativos e relatórios personalizados que impulsionam decisões estratégicas.",
  },
  {
    icon: Database,
    title: "ETL & Integração de Dados",
    description: "Processos robustos de extração, transformação e carregamento de dados para garantir informações confiáveis e atualizadas.",
  },
  {
    icon: TrendingUp,
    title: "Análise de Dados Avançada",
    description: "Análises preditivas e prescritivas que revelam padrões ocultos e oportunidades de crescimento para seu negócio.",
  },
  {
    icon: Globe,
    title: "Marketing & Posicionamento",
    description: "Estratégias data-driven de marketing digital e posicionamento de mercado para ampliar sua presença e conquistar novos clientes.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Web",
    description: "Sites modernos, landing pages de alta conversão e plataformas digitais desenvolvidas com as melhores tecnologias do mercado.",
  },
  {
    icon: Cpu,
    title: "Consultoria Tecnológica",
    description: "Assessoria completa em tecnologia, desde arquitetura de sistemas até implementação de soluções inovadoras e escaláveis.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e personalizadas para transformar seu negócio através da tecnologia e análise de dados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
