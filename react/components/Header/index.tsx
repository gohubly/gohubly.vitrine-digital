import React, { FC } from "react";
import { ALLOWED_SOCIAL_MEDIAS } from "../../constants";
import SocialMediaBar from "../SocialMediaBar";
import { HeaderProps } from "./Header.types";
import styles from '../../g.css'

const Header: FC<HeaderProps> = ({
  affiliateStore
}) => {
  return (
    <div className='mt3'>
      <div className={styles.banner} style={{ backgroundImage: `url(${affiliateStore.banner})` }} />
      <div className="w-80 center flex">
        <div className={`${styles.avatar} br-pill ba b--white`} style={{ backgroundImage: `url(${affiliateStore.avatar})` }}></div>
        <div className="ml2">
          <p className="b f4">
            {affiliateStore.name}
          </p>
          <p>
            {affiliateStore.description}
          </p>

          <SocialMediaBar medias={
            Object
              .entries(affiliateStore)
              .filter(([key]) => ALLOWED_SOCIAL_MEDIAS.includes(key))
              .map(([key, value]) => ({ type: key as SocialMedia, username: value }))
          } />
        </div>
      </div>
    </div>
  )
}

export default Header;