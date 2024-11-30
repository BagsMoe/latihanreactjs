import './App.css'
import Footer from './componen/footer/'

import Header from './componen/header/'
import Main from './componen/main/'

const App = () => {
    
    return (
        <div className="w-full">
        { /* Header */ }
        <Header />
        { /* Main */ }
        <Main />
        <Footer />
        </div>
        
    ) 
}


export default App
