import React from 'react'
import { UnsplashCredit } from './'

const author = 'Markus Spiske'
const authorUrl = 'https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
const siteUrl = 'https://unsplash.com/s/photos/hops?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'

export default () => <UnsplashCredit author={ author } authorUrl={ authorUrl } siteUrl={ siteUrl }/>

