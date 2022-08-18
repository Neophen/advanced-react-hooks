// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

let CountContext = React.createContext()

function CountProvider({children}) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  try {
    const [count, setCount] = React.useContext(CountContext)
    return [count, setCount]
  } catch (error) {
    throw new Error('useCount must be used within a <CountProvider> ')
  }
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [_, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default App
