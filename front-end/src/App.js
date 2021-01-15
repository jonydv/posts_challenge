import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';

const App = () => {
  return (
    <Router>
        <Container>
            <Header />
            <main className='main-section'>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/post/:id' component={PostDetailsScreen} />
  
           </main>
            <Footer />
          </Container>
    </Router> 
  )
}

export default App;
