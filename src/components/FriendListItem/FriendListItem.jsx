import clsx from "clsx";
import css from './FriendListItem.module.css'

export default function FriendListItem({
    friend:{avatar, name, isOnline}
}) {
   const ClsxStatus = clsx(isOnline ? css.isOnline : css.isOffline)
    return (
        <div>
         <img src={avatar} alt="Avatar" width="48" />
         <p>{name}</p>
         <p className={ClsxStatus}>{isOnline  === true ? "Online" : "Offline"}</p>
        </div>
    )
}