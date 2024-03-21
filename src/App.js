import FirstContextProvider from "./components/context/Firstcontext";
import Child from "./Child";

function App() {
  return(
    <FirstContextProvider>
      <Child></Child>
    </FirstContextProvider>
  )
}

export default App;
