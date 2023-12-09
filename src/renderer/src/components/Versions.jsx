import { useState } from 'react'

function Versions() {
  const [versions] = useState(window.electron.process.versions)

  return (
    <div>
      <ul className="versions flex gap-2 text-xs flex-wrap p-1 justify-center">
        <li className="electron-version p-2 border-r-2 border-black">App v1.0.0</li>
        <li className="electron-version p-2 border-r-2 border-black">Electron v{versions.electron}</li>
        <li className="chrome-version p-2 border-r-2 border-black">Chromium v{versions.chrome}</li>
        <li className="node-version p-2 border-r-2 border-black">Node v{versions.node}</li>
        <li className="v8-version p-2">V8 v{versions.v8}</li>
      </ul>
    </div>
  )
}

export default Versions
