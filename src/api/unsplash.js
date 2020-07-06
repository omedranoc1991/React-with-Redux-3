import axios from 'axios'

export default axios.create({
baseURL : 'https://api.unsplash.com',
headers : {Authorization : 'Client-ID S1grHRudP2YBKtcpTIknHPmdeVNv776flizwTSA2UKc'}
})
