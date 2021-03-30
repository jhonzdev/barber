import aboutStyle from '../styles/About.module.css'

const About = () => {
    return (
        <div className={aboutStyle.container}>
            <div className={aboutStyle.infoWrapper}>
                <div className={aboutStyle.infoRow}>
                    <div className={aboutStyle.info1}>
                        <h2 className={aboutStyle.title}>Unique Barber Style</h2>
                        <p className={aboutStyle.para}>Vestibulum lorem, mauris wisi, vitae ipsum est fringilla sociosqu, magna ac metus donec nullam nec in, vel molestie eget. Magna et et duis, quam id nascetur tellus iaculis pede elit. Torquent et rutrum curabitur adipiscing sapien.</p>
                        <p  className={aboutStyle.para}>A laoreet aliquam mauris porta maecenas felis, donec nec curabitur quis dui sit, et porta ultricies pretium semper, rutrum vitae, wisi et. Enim dis enim, eros ipsum turpis suspendisse hendrerit vitae, nunc varius.</p>
                    </div>
                    <div className={aboutStyle.info2}>
                        <img
                            src="/a1.jpg"
                            alt="Picture of the barber shop"
                            className={aboutStyle.img1}
                        />
                        <img
                            src="/a2.jpg"
                            alt="Picture of the barber shop"
                            className={aboutStyle.img1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
