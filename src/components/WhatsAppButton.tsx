import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '5511999999999';
  const message = 'Olá! Gostaria de fazer um pedido dos seus deliciosos produtos!';
  const whatsappUrl = `https://wa.link/j9bx92`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-95 group flex items-center gap-3 animate-bounce hover:animate-none"
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} />
      <span className="hidden sm:inline-block font-semibold pr-2">
        Faça seu Pedido
      </span>

      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
    </a>
  );
}
