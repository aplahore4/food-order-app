import Header from './Layout/Header'
import Meals from './Meals/Meals'
import CartProvider from './store/CartProvider'

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  )
}

export default App
