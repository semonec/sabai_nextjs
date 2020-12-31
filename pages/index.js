import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Landing from './landing/Landing'

export default function Home({ isConnected }) {
  return <div></div>
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
