import { Header } from './components/Header';
import { ProductCarousel } from './components/ProductCarousel';
import { ProductList } from './components/ProductList';
import { About } from './components/About';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { featuredProducts, products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductCarousel products={featuredProducts} />
        
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
