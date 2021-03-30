import coverStyle from '../styles/Cover.module.css'

const Cover = ({ title }) => {
    return (
        <div className={coverStyle.coverContainer}>
            <div className={coverStyle.imageWrapper}>
                <img src='cover.jpg' alt='Cover' className={coverStyle.cover} />
            </div>
            <div className={coverStyle.textWrapper}>
                <p className={coverStyle.title}>{title}</p>
            </div>
        </div>
    )
}

export default Cover
