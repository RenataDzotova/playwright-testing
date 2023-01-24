import Link from 'next/link';
import styles from '@/styles/Home.module.css'

export default function About(){
    return(
        <>
        About page
        <div className={styles.grid}>
        <Link href="/">Go Back</Link>
        </div>
        </>
    )
}