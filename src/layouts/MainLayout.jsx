import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div id="app">
            <Navbar />
                <section>
                    { children }
                </section>
            <Footer />
        </div>
    );
}

export default MainLayout;