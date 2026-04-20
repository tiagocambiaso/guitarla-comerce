import { useReducer, useEffect } from "react"
import Header from "./componentes/Header"
import Guitar from "./componentes/Guitar"
import { cartReducer, inicialState } from "./reducers/cart-reducer.ts"

function App() {

  const [state, dispatch] = useReducer(cartReducer, inicialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  
  return (
    <>
      <Header 
        cart={state.cart}
        dispatch={dispatch}
      />
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
              
              {state.data.map((guitar) => (  // 4. RENDERIZADO (.map): El bucle de React. Dibuja un componente por cada guitarra.
                  <Guitar 
                    key={guitar.id}    // DNI único del componente para que React sepa cuál es cuál.
                    guitar={guitar}    // 5. PROPS: Le pasamos los datos al componente hijo...
                    dispatch={dispatch} // ... el botón del hijo pueda avisarle al padre del click.
                  />
              ))}
              
          </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App