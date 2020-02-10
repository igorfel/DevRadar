import React, { useEffect, useState } from 'react'
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './componets/DevForm'
import DevItem from './componets/DevItem'

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs')

      setDevs(res.data)
    }

    loadDevs()
  }, [])

  async function handleDevAdd(data) {
    const res = await api.post('/devs', data)

    setDevs([...devs, res.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleDevAdd} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => 
            <DevItem key={dev._id} dev={dev}/>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App