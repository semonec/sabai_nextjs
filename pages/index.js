import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Landing from './Landing'

export default function Home({ isConnected }) {
  return (
    <Landing />
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
