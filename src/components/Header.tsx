import { Cookie } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 to-orange-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <Cookie className="w-8 h-8 text-rose-400" strokeWidth={1.5} />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-rose-800">
              Flores Receita Caseira
            </h1>
            <p className="text-sm text-rose-600">Artesanal & Caseiro</p>
          </div>
        </div>
      </div>
    </header>
  );
}
