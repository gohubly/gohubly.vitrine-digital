import React, { FC } from 'react'
import Icons from '../Icons'
import { SocialMediaBarProps } from './SocialMediaBar.types'
import styles from '../Icons/Icon.module.css'
import { getSocialMediaUrl, getSocialMediaUsername } from '../../helpers'

const SocialMediaBar: FC<SocialMediaBarProps> = ({
  medias
}) => {
  return (
    <div className="flex">
      {
        medias.map(({ type, username }) => {
          const cappitalized = `${type.substring(0, 1).toUpperCase()}${type.substring(1)}` as "Facebook" | "Tiktok" | "Youtube" | "Instagram"
          const Icon = Icons[cappitalized]

          return (
            <a key={type} className={`flex ${styles.Icon}`} href={getSocialMediaUrl(username, type)} target='_blank'>
              <Icon />

              {getSocialMediaUsername(username, type)}
            </a>
          )
        })
      }
    </div>
  )
}

export default SocialMediaBar