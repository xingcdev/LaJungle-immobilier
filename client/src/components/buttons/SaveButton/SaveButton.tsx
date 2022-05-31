import { HTMLAttributes,ReactNode } from "react";
import styles from "./Button.module.scss";


interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?:ReactNode
}

export default function Button(props:ButtonProps){
    return(
        <button {...props} className={styles.button}>{props.children}</button>
    )
    
}