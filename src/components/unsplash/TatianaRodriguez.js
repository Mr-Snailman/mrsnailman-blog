import React from 'react'
import { UnsplashCredit } from './'

const author = 'Tatiana Rodriguez'
const authorUrl = 'https://unsplash.com/@tata186?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
const siteUrl = 'https://unsplash.com/s/photos/beer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'

export default () => <UnsplashCredit author={ author } authorUrl={ authorUrl } color='textSecondary' siteUrl={ siteUrl }/>

