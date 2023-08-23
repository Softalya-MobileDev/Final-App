import React, { useState } from "react"
import axios from "axios"
const usePost = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const post = (url, apiData) => {

            axios.post(url, apiData).
            then(response => 
                {setLoading(false)
                setData(response.data)}).
                catch(error => setError(error))

    }

    return { data, loading, error, post }
}

export default usePost;
