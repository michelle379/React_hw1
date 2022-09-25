import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/List'

const Home = () => {
    return(
        <div className="bg-color">
        <div className="container">
        <Header
            title="作品集"
            slogan="by魚卵卷" />
        <List />
        <Footer />
        </div>
      </div>
    )
  };
  
  export default Home;