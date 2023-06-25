import { FC } from "react"
import { IHome } from "./home.interface"
import Layout from "@/components/layout/Layout"

const Home:FC<IHome> = () => {
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  )
}

export default Home