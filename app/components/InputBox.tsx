import React from 'react'
import Calculate from './Calculate'
import styles from './InputBox.module.css'
import InputField from './InputField'

styles.inputBoxContainer

const InputBox = () => {
  return (
    <div className={styles.inputBoxContainer}>
        <InputField />
        <Calculate />
    </div>
  )
}

export default InputBox