import styles from '../../styles/ButtonMasna.module.css'

const ButtonMasna = ({children, value, onClick}) => {
    return (
        <button className={`${styles.button}`} onClick={onClick ? onClick : ''}>
            {value}
        </button>
    );
}

export default ButtonMasna;