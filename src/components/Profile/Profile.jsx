export default function Profile({
     user:{avatar, username, tag, location,  stats},
    }) {
    return (
        <div>
            <div>
                <img
                    src= {avatar}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
          </div>

            <ul>
                {Object.entries(stats).map(([key, value]) =>
                    (<li key={key}><span>{key}</span><span>{value}</span></li>))}
            </ul>
        </div> 
    );
}

