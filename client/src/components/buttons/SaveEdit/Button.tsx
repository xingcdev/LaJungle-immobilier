import { HTMLAttributes,ReactNode } from "react";
import styles from "./SaveButton.module.scss";


interface SaveButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?:ReactNode
}

export default function SaveButton(props:SaveButtonProps){
    return(
        <button {...props} className={styles.button}>{props.children}</button>
    )
    
}