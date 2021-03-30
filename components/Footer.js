import footerStyle from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyle.footerContainer}>
            <div className={footerStyle.footerWrapper}>
                <span className={footerStyle.spanText}>© 2021 All <b>Rights Reserved</b></span>
            </div>
        </div>
    )
}

export default Footer
