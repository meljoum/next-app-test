
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout(props) {
    return (
        <>
            <Navigation />
            
            {props.children}

            <Footer />
        </>
    );
}