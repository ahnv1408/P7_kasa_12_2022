
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import productsList from '../products/products.json';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Cards productsList={productsList}/>  
      </main>
      <Footer />
    </>
  );
}

export default Home;

