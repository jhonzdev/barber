import cardStyle from '../styles/Card.module.css'
import Card from './Card'

const CardCon = () => {
    return (
        <div className={cardStyle.cardConWrapper}>
            <div>
                <h2 className={cardStyle.conTitle}>Our Tools</h2>
            </div>
            <div className={cardStyle.cardWrapper}>
                <Card 
                    src='icon3.png' 
                    alt='Scissors' 
                    title='Scissors' 
                    description='Quis aliquam vivamus sit metus mauris, a maecenas massa amet laoreet iaculis purus.' />
                <Card
                    src='icon1.png' 
                    alt='Shampo' 
                    title='Hair Wash' 
                    description='Quis aliquam vivamus sit metus mauris, a maecenas massa amet laoreet iaculis purus.' />
                <Card
                    src='icon2.png' 
                    alt='blade' 
                    title='blade' 
                    description='Quis aliquam vivamus sit metus mauris, a maecenas massa amet laoreet iaculis purus.' />
            </div>
        </div>
    )
}

export default CardCon
