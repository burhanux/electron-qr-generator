import Versions from './components/Versions'
import Header from './components/Header'
import QRForm from './components/QRForm'
function App() {
  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <div className="w-full">
        <Header />
        <QRForm />
      </div>
      <Versions />
    </div>
  )
}

export default App