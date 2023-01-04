import '../style/app.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import productsList from '../products/products.json';


function Home() {
  return (
    <>
      <Header />
      <Banner />
      {/* <main>
        <Cards/>
      </main> */}
      <article className='cards'>{
            productsList.map((product) =>
            <>
                <Link  to={`logement/${product.id}`} key={product.id} className="container_card">
                    <img src={product.cover} alt='location'/>
                    <div className='layer_cards'>
                        <p className='p_cards'>{product.title}</p>
                    </div>
                </Link>
            </>
        )}</article>
      <Footer />
    </>
  );
}

export default Home;

