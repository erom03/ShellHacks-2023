import React from 'react'
import Calculate from './CalculateButton'
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