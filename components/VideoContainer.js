import videoStyle from '../styles/Video.module.css'

const VideoContainer = () => {
    return (
        <div className={videoStyle.container}>
            <div className={videoStyle.wrapper}>
                <video className={videoStyle.bg} autoPlay loop muted src='bg.mp4' type='video/mp4' />
            </div>
            <div className={videoStyle.content}>
                <h1 className={videoStyle.title}>Men's haircuts and hairstyles.</h1>
                <p className={videoStyle.text}>
                The barber shop used to be more than just a place to get a new hairstyle or a fresh cut <br /> it was a community center.
                </p>
                <a className={videoStyle.btn}>Contact Us</a>
            </div>
        </div>
    )
}

export default VideoContainer
