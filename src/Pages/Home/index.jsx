import { useContext } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductInfo from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems.map(item => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>We don't have anything :(</div>;
      }
    } else if (context.selectedCategory) {
      // Filtrar por categoría seleccionada
      const filteredItemsByCategory = context.items.filter(
        item => item.category.toLowerCase() === context.selectedCategory.toLowerCase()
      );
      return filteredItemsByCategory.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else if (context.items?.length > 0) {
      return context.items.map(item => (
        <Card key={item.id} data={item} />
      ));
    }
  };

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-2xl text-sky-800 mt-3'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-2xl border border-sky-800 w-80 p-4 mb-6 focus:outline-none'
        onChange={event => context.setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>{renderView()}</div>
      <ProductInfo />
    </Layout>
  );
}

export default Home;
