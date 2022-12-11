import Footer from './components/Footer'
import Router from './Router'

function App() {
 
  return (
    <>
    <Router />
    <Footer />
    </>
  );
}

export default App;



// function App() {
 
//   return (
//     <>
//     <Header />
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path='/champion/:id' element={<Champion />}/>
//         </Routes>
//       </Router>
//     <Footer />
//     </>
//   );
// }

// export default App;