import '../style/app.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import productsList from '../products/products.json';


function Home() {
  return (
    <>
      <Header />
      <Banner />
      <article className='cards'>{
            productsList.map((product) =>
            <>
                <div className="container_card">
                    <img src={product.cover} alt='location'/>
                    <div>
                        <p className='p_cards'>{product.title}</p>
                    </div>
                </div>
            </>
        )}</article>
      <Footer />

    </>
  );
}

export default Home;

