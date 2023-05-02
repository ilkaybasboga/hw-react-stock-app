import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)


  const axiosPublic = axios.create({
    baseURL: "https://12278.fullstack.clarusway.com/",
  })

  const axiosWithToken = axios.create({
    baseURL: "https://12278.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosWithToken, axiosPublic }
}

export default useAxios
// const BASE_URL = "https://12278.fullstack.clarusway.com/"
