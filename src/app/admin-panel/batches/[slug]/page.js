import React from 'react'
import BatchesClient from './BatchesClient'

export default async function page({params}) {
  const {slug}= await params
  return (
  <BatchesClient slug={slug}></BatchesClient>
  )
}
