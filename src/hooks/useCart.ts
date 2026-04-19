import { useState, useEffect, useMemo } from "react"
import { db } from "../data/db"
import type { Guitar, CartItem } from "../types/index.ts"
export const useCart = () => {
    
const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  } 
  
  const [data] = useState(db) // 1. ESTADO: 'data' carga la base de datos de guitarras.
  const [cart, setCart] = useState(initialCart) // 'cart' es la libreta. setCart es la lapicera que avisa a React de los cambios.

  const MAX_ITEMS = 5
  const MIN_ITEMS = 1
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  function addToCart(item : Guitar) {
    
    const itemExists = cart.findIndex(guitar => guitar.id === item.id) // 2. BUSCADOR: ¿Ya está este ID en el carrito? (-1 es que no).
    
    if (itemExists >= 0) { 
      console.log("El item ya existe") // Ya existe en alguna posición (0, 1, 2...). Por ahora solo avisamos.
      const updatedCart = [...cart] // Hacemos una copia del carrito para no mutar el estado directamente.
      updatedCart[itemExists].quantity++ // Si el item ya existe, le sumamos 1 a su cantidad.
      setCart(updatedCart) // Actualizamos el carrito con la copia modificada.
    } else {
        const newItem : CartItem = {...item, quantity: 1} // Si el item no existe, lo agregamos con cantidad 1.
        setCart([...cart, newItem]) // 3. INMUTABILIDAD: Volcamos la caja vieja (...prevCart) y sumamos el item nuevo.
    }

  }
   function removeFromCart(id : number) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id)) 

  }  

  function  increaseQuantity(id : number) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }
  
  function decreaseQuantity(id : number) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function cleanCart() {
    setCart([]) 
  }
  
  function saveLocalStorage() {
    
  } 

  // state derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart]) // Solo se recalcula cuando 'cart' cambia.
    const cartTotal = useMemo(() => cart.reduce ((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart, 
        decreaseQuantity,
        increaseQuantity, 
        cleanCart, 
        isEmpty,
        cartTotal
    
    }
}

