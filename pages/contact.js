import Cover from '../components/Cover'
import conStyle from '../styles/Contact.module.css'

const contact = () => {
    return (
        <div>
            <Cover title='Contact'/>
            <div className={conStyle.conWrapper}>
                <div className={conStyle.conRow}>
                    <div className={conStyle.con1}>
                        <div className={conStyle.loc}>
                            <p>
                                <b>Office location</b> – pulvinar habitant ante elit, donec tristique. <br />
                                Nam cras quam auctor, risus fusce, eu vel, sit sapien et proin <br />
                                pede in nibh, augue tellus id nullam. Iusto consequat a, leo ante <br />
                                morbi potenti elit donec urna.<br />
                            </p>
                        </div>
                        <div  className={conStyle.loc}>
                            <p><b>Monday to Friday:</b> 9:00 AM to 6:00 PM</p>
                            <p><b>Saturday:</b> 9:00 AM to 5:00 PM</p>
                            <p><b>Sunday:</b> Closed</p>
                        </div>
                        <div className={conStyle.loct}>
                            <p><b>Address:</b>  685 Lane Drive St. California, 33020</p>
                            <p><b>Phone:</b>  +010 234 7892 34</p>
                            <p><b>Email:</b>  info@barbero.com</p>
                        </div>
                    </div>
                    <div className={conStyle.con2}>
                        <input  className={conStyle.inputNameStyle} placeholder='Name' type='text' />
                        <input  className={conStyle.inputPhoneStyle} placeholder='Phone' type='Number' />
                        <textarea className={conStyle.inputMessageStyle} rows="4" cols="50" placeholder='Message'>
                        </textarea>
                        <a className={conStyle.btnStyle}>Send Message</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
