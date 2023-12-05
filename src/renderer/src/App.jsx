import Versions from './components/Versions'
import Header from './components/Header'
import QRForm from './components/QRForm'
function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <QRForm />
      <Versions></Versions>
    </div>
  )
}

export default App