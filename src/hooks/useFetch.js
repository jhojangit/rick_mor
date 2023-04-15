import axios from "axios"
import { useEffect, useState } from "react"



const useFetch = (url) => {



    const [state, setState] = useState()

    useEffect(() => {

        axios.get(url)
            .then(response => setState(response.data))

            .catch(err => console.error(err))

    }, [url])

    return state

}

export default useFetch