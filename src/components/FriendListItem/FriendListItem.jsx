// import clsx from "clsx";

export default function FriendListItem({
    friend:{avatar, name, isOnline}
}) {
    // const statusClassClsx = clsx(css.status, isOnline ? css.isOnline : css.isOffline)
    return (
        <div>
           <div>
              <img src={avatar} alt="Avatar" width="48" />
             <p>{name}</p>
             <p>{isOnline}</p>
          </div>
        </div>
    )
}