import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div id="app">
            <Navbar />
            <div className={'circuitosbg'}>
                <div className={'circuitos_left'}></div>
                <div className={'circuitos_right'}></div>
            </div>
            <section>
                { children }
            </section>
            <Footer />
        </div>
    );
}

export default MainLayout;