import '../styles/Footer.css';

const Footer = (props) => {
    const { address, name } = props;

    return (
        <div id='Footer'>
            <small>Developed by <a href={address} target='_blank' rel='noreferrer'>{name}</a></small>
        </div>
    );
}

export default Footer;