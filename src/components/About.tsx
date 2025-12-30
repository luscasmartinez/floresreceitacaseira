import { Heart, Clock, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada produto é preparado com carinho e dedicação'
    },
    {
      icon: Clock,
      title: 'Sempre Fresquinho',
      description: 'Produção diária para garantir qualidade e sabor'
    },
    {
      icon: Award,
      title: 'Ingredientes Selecionados',
      description: 'Usamos apenas os melhores ingredientes'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-rose-800 mb-4">
            Sobre Nós
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Somos apaixonados por criar doces e salgados artesanais que levam
            o sabor caseiro para sua mesa. Cada receita é feita com ingredientes
            frescos e muito carinho, mantendo a tradição da comida feita em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
                  <Icon className="w-8 h-8 text-rose-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
