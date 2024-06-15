// import clsx from "clsx";
// import FriendListItem from '../FriendListItem/FriendListItem.module.css'

export default function FriendListItem({
    friend:{avatar, name, isOnline}
}) {
    // const statusClassClsx = clsx(css.status, isOnline ? css.isOnline : css.isOffline)
    return (
        <div>
           <div>
             <img src={avatar} alt="Avatar" width="48" />
             <p>{name}</p>
             <p>{isOnline  === true ? "Online" : "Offline"}</p>
          </div>
        </div>
    )
}