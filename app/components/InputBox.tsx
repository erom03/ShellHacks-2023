import React from 'react'
import Calculate from './Calculate'
import styles from './InputBox.module.css'

styles.inputBox

const InputBox = () => {
  return (
    <div className={styles.inputBox}>
        <Calculate />
    </div>
  )
}

export default InputBox