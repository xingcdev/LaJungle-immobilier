import { HTMLAttributes,ReactNode } from "react";
import styles from "./CancelButton.module.scss";


interface CancelButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?:ReactNode
}

export default function CancelButton(props:CancelButtonProps){
    return(
        <button {...props} className={styles.button}>{props.children}</button>
    )
}