import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './styles.module.css'

import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
              nome="Alessandro" 
              bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quod cupiditate tempore, eum dignissimos voluptatum?"
          />

        <Post nome="Alexandre"/>
        </main>

      </div>

      

    </>
  )
}


