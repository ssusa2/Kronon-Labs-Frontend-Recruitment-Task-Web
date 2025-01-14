'use client'

import React from 'react'
import { RecoilRoot } from 'recoil'

interface RecoilContextProviderType {
  children: React.ReactNode //
}

const RecoilContextProvider = ({ children }: RecoilContextProviderType) => {
  return <RecoilRoot>{children}</RecoilRoot>
}
export default RecoilContextProvider
