import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Layout({children}:any){
    return <main className={styles.main}>
        <div className={styles.logo}>
            <Image
                src="/assets/images/logo.svg"
                alt="Auto News"
                width={150}
                height={35}
                priority
            />
        </div>

        <div className="light-background">

            <div className={styles.center}>
                { children }
            </div>

        </div>
    </main>
}