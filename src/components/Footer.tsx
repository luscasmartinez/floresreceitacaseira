import { Instagram, Facebook, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-rose-900 to-orange-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Receita Caseira</h3>
          <p className="text-rose-200 text-sm">
            Sabor caseiro, feito com amor
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/adrisalgadoartesanal/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all active:scale-95"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center text-sm text-rose-200 border-t border-white/20 pt-6">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 fill-current" /> em {currentYear}
          </p>
          <p className="mt-2 text-xs">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
