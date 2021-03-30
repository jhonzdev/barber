import serviceStyle from '../styles/Service.module.css'
import ServiceCard from './ServiceCard'

export default function ServicesCon() {
    return (
        <div className={serviceStyle.servConWrapper}>
            <div className={serviceStyle.servWrapper}>
                <ServiceCard 
                    img='1b.jpeg'
                    title='Beard trimmers'
                    text='They trim down your beard using adjustable guards that ensure a clean, even cut, for a smarter look'
                />
                <ServiceCard 
                    img='2h.jpeg'
                    title='Hair Cut'
                    text='They trim down your beard using adjustable guards that ensure a clean, even cut, for a smarter look'
                />
                <ServiceCard 
                    img='3h.jpg'
                    title='Hair Wash'
                    text='They trim down your beard using adjustable guards that ensure a clean, even cut, for a smarter look'
                />
                <ServiceCard 
                    img='4m.jpeg'
                    title='Mustache'
                    text='They trim down your beard using adjustable guards that ensure a clean, even cut, for a smarter look'
                />
                <ServiceCard 
                    img='5s.jpeg'
                    title='Shaves Face'
                    text='They trim down your beard using adjustable guards that ensure a clean, even cut, for a smarter look'
                />
                <ServiceCard 
                    img='6w.jpg'
                    title='Face Wax'
                    text='They trim down your beard using adjustable guards that ensure a clean, even cut, for a smarter look'
                />
            </div>
        </div>
    )
}
