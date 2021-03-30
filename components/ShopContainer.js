import cardStyle from '../styles/Card.module.css'
import shopStyle from '../styles/Shop.module.css'
import Card from './Card'

const CardCon = () => {
    return (
        <div className={shopStyle.shopConWrapper}>
            <div>
                <p className={shopStyle.shopTitle}>List Shop Item</p>
            </div>
            <div className={shopStyle.shopWrapper}>
                <Card 
                    src='1.jpg' 
                    alt='Wax' 
                    title='Bossman Wax' 
                    description='₱300.00' />
                <Card
                    src='2.jpg' 
                    alt='Shampo' 
                    title='Hair Shampo' 
                    description='₱100.00' />
                <Card
                    src='3.jpg' 
                    alt='blade' 
                    title='Mustache' 
                    description='₱350.00' />

                <Card 
                    src='4.jpg' 
                    alt='Gel' 
                    title='Hair Gel' 
                    description='₱400.00' />
                <Card
                    src='5.jpg' 
                    alt='Razor' 
                    title='Razor Gold   ' 
                    description='₱700.00' />
                <Card
                    src='6.jpg' 
                    alt='Scissors' 
                    title='Scissors' 
                    description='₱3,100.00' />
            </div>
        </div>
    )
}

export default CardCon
