import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import { ProductProvider } from "./context/ProductContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CartProvider } from "./context/CartContext"
import CartPage from "./pages/CartPage/CartPage"

//Setting up Query Client for Query Client provider for axios API pull
function App() {
  const queryClient = new QueryClient()

  return (

    //Wrapping project with Query Client Provider for axios API pul
    <QueryClientProvider client={queryClient}>
      {/* Wrapping project with Product provider for global access to products array */}
      <ProductProvider>
        {/* Wrapping project with Cart provider for global access to products array */}
        <CartProvider>
          {/* Wrapping project with BrowserRouter for user Navigation */}
          <BrowserRouter>
          {/* Wrapping each page in routes */}
          <Routes>
            {/* Using route for each page navigation */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </QueryClientProvider>
  )
}

// Sending app to main for project run
export default App
