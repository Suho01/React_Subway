import './App.css';
import ContentsMenu from './components/ContentsMenu';
import Footer from './components/Footer';
import MenuList from './components/MenuList';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Nav />
            <MenuList />
            <ContentsMenu />
            <Footer />
        </>
    );
}

export default App;
