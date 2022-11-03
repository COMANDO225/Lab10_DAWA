const Enlace = (props) => {

    const { children, url, color } = props

    return (
        <a href={url? url: ''} style={{
            color: color ? color : 'currentColor'
        }} target={"_blank"} rel="noreferrer">
            {children}
        </a>
    );
}

export default Enlace;