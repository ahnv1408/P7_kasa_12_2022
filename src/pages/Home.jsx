import '../style/app.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
// import Host from '../components/Host';
// import Tags from '../components/Tags';
import productsList from '../products/products.json';
// import Caroussel from '../components/Caroussel/Caroussel';
// import Collapse from '../components/Collapse';
// import Rate from '../components/Rate';


function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Cards productsList={productsList}/>  
        {/* <Caroussel pictures={productsList.pictures}/> */}
        {/* <Rate/> */}
        {/* <Tags /> */}
        {/* <Host productsList = {productsList}/> */}
        {/* <Collapse productsList={productsList}/>      */}
      </main>
      <Footer />
    </>
  );
}

export default Home;

