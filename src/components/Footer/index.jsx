import styles from '../../styles/Footer.module.css'
import ThunderIcon from '../icons/ThunderIcon';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.byAlmeyda}>
                <p className={styles.powered}>Powered by</p>
                    <ThunderIcon />
                <a className={styles.almeyda} href="https://www.linkedin.com/in/anderson-almeyda-torres/" target={'_blank'} rel="noreferrer" >Almeyda</a>
            </div>
        </footer>
    );
}

export default Footer;