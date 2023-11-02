import { Outlet } from "react-router-dom"
import Tabs from "../components/Tabs"
import Header from "../components/Header"
import ContainerWrapper from "../components/ContainerWrapper"
import SearchbarForm from '../components/SearchbarForm'

const RootLayout = () => {
  return (
    <>
        <ContainerWrapper>
          <Header title="#Todo" />
          <Tabs />
          <SearchbarForm placeholder="add details" type="submit"/>
          <Outlet />
        </ContainerWrapper>
    </>
  )
}

export default RootLayout