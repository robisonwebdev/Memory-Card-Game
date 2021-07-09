import '../styles/Footer.css';

const Footer = ({ address, name }) => {
    return (
        <div id='Footer'>
            <small>Developed by <a href={address} target='_blank' rel='noreferrer'>{name}</a></small>
        </div>
    );
}

export default Footer;