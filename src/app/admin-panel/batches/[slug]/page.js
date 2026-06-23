import React from 'react'
import BatchesClient from './BatchesClient'

export default async function page({params}) {
  const {slug}= await params
  if(!slug) return
  return <BatchesClient slug={slug}></BatchesClient>
  
}
