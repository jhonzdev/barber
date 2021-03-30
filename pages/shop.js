import Cover from '../components/Cover'
import ShopContainer from '../components/ShopContainer'
import shopStyle from '../styles/Shop.module.css'

const shop = () => {
    return (
        <div>
            <Cover title='Shop'/>
            <div className={shopStyle.container}>
                <ShopContainer />
            </div>
        </div>
    )
}

export default shop
