import styles from '../../styles/Navbar.module.css'
import Enlace from '../Enlace';
import FbIcon from '../icons/FbIcon';
import GithubIcon from '../icons/GithubIcon';
import YoutuIcon from '../icons/YoutuIcon';

const socialesMasna = [
    {
        id: 3,
        enlace: 'https://www.youtube.com/channel/UCkS3rZ53w8Wj4FdPTtKZcqg',
        children: <YoutuIcon size = {20} />
    },
    {
        id: 1,
        enlace: 'https://github.com/COMANDO225',
        children: <GithubIcon size = {20}/>
    },
    {
        id: 2,
        enlace: 'https://www.facebook.com/anderson.almeydatorres/',
        children: <FbIcon size = {20} />,
    },
]

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo}>Almeyda®</h1>
            <div className={styles.sociales}>
                {
                    socialesMasna.map(({id, enlace, children}) => (
                        <Enlace key={id}
                            url={enlace}
                        >
                            {children}
                        </Enlace>
                    ))
                }
            </div>
        </div>
    );
}

export default Navbar;