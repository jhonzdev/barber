import serviceStyle from '../styles/Service.module.css'

const ServiceCard = ({ img, title, text }) => {
    return (
        <div className={serviceStyle.servContainer}>
            <img
                src={img}
                alt='Image'
                width={250}
                height={150}
                className={serviceStyle.servImg}
            />
            <h2 className={serviceStyle.servTitle}>{title}</h2>
            <p className={serviceStyle.servText}>{text}</p>
        </div>
    )
}

export default ServiceCard
