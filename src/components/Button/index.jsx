import styles from '../../styles/ButtonMasna.module.css'

const ButtonMasna = ({ value, ghost, onClick }) => {



    return (
        <button className={ghost ? `${styles.button} ${styles.ghost}` : `${styles.button}`} onClick={onClick ? onClick : ''}>
            {value}
        </button>
    );
}

export default ButtonMasna;