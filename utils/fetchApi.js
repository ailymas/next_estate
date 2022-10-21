import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'

export const FetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '1cf5d14e31msh397d830d189b779p1c02b3jsne08ceb2edb01',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data 
}

