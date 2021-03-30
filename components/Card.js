import cardStyle from '../styles/Card.module.css'

const Card = ({src, alt, title, description}) => {
    return (
        <div className={cardStyle.cardContainer}>
            <img
                src={src}
                alt={alt}
                width={80}
                height={80}
            />
            <h2 className={cardStyle.cardTitle}>{title}</h2>
            <p className={cardStyle.cardText}>{description}</p>
        </div>
    )
}

export default Card
