import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className = {styles.head}>
      <h1 className={styles.logo}>Nancy</h1>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
