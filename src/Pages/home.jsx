import Header from "../Componen/Header";
import Layout from "../Componen/Layout";
import Navbar from "../Componen/Navbar";
import Utama from "../Componen/Utama";

function Home() {
    return ( 
        <>
            <Layout>
                <Navbar/>
                <Header/>
                <Utama/>
            </Layout>
        </>
     );
}


 
export default Home;