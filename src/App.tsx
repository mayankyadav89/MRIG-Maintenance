import { useBrand } from './hooks/useBrand';
import { BrandView } from './components/BrandView';

export function App() {
  const { brand, isLocalhost } = useBrand();

  return <BrandView brand={brand} isLocalhost={isLocalhost} />;
}

export default App;
