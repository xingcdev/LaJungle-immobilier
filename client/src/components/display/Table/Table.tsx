import { ReactNode } from 'react';
import styles from './Table.module.scss';

export default function Table({ children }: { children: ReactNode }) {
	return <table className={styles.table}>{children}</table>;
}

export function TableHead({ children }: { children: ReactNode }) {
	return <thead>{children}</thead>;
}

export function TableBody({ children }: { children: ReactNode }) {
	return <tbody>{children}</tbody>;
}

export function TableRow({ children }: { children: ReactNode }) {
	return <tr>{children}</tr>;
}

export function TableHeader({ children }: { children: ReactNode }) {
	return <th>{children}</th>;
}

export function TableData({ children }: { children: ReactNode }) {
	return <td>{children}</td>;
}
