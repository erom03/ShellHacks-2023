import React from 'react'
import Calculate from './Calculate'
import styles from './InputBox.module.css'

styles.inputBoxContainer

const InputBox = () => {
  return (
    <div className={styles.inputBoxContainer}>
        <Calculate />
    </div>
  )
}

export default InputBox