import axios from 'axios'

const API_URL = 'http://localhost:8081/api/cacti'

export async function getAllCacti() {
  const response = await axios.get(API_URL)
  return response.data
}

export async function getCactusById(id) {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}