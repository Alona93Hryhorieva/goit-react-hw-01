import css from './Profile.module.css';

export default function Profile({
     user:{avatar, username, tag, location,  stats},
    }) {
    return (
        <div className={css.container}>
            <div className={css.imgName}>
                <img className={css.img}
                    src= {avatar}
                    alt="User avatar"
                />
                <p className={css.username}>{username}</p>
                <p className={css.tagLocation}>@{tag}</p>
                <p className={css.tagLocation}>{location}</p>
          </div>

            <ul className={css.list}>
                {Object.entries(stats).map(([key, value]) =>
                    (<li key={key} className={css.item}><span>{key}</span><span className={css.keyValue}>{value}</span></li>))}
            </ul>
        </div> 
    );
}

