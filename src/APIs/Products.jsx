import axios from "axios"
import { baseUrl } from "./config"

export const getProductsApi = async () => {
    return await axios.get(`${baseUrl}products`)
}