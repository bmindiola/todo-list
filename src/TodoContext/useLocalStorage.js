import React from "react"

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue)
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem = initialValue
  
          !localStorageItem 
          ? localStorage.setItem(itemName, JSON.stringify(initialValue))
          : parsedItem = JSON.parse(localStorageItem)
  
          setItem(parsedItem)
          setLoading(false)
        } catch (error) {
          setError(error)
        }
      }, 1000)
    }, [initialValue, itemName])
  
    const saveItem = (newTodos) => {
      try {
        const strTodos = JSON.stringify(newTodos)
        localStorage.setItem(itemName, strTodos)
        setItem(newTodos)
      } catch (error) {
        setError(error)
      }
    } 
  
    return { 
      item, 
      saveItem, 
      loading,
      error
    }
  }

export { useLocalStorage }