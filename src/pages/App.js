import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { useState } from 'react';

function App() {
  const [ search, setSearch ] = useState('')

  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <Container search={search}/>
      <Footer />
    </>
  );
}

export default App;
