import axios from "axios"
import { useEffect, useState } from "react"
import AppData from "./assets/AppData"

function API (){


  const [getData, setGetData] = useState ([])

  console.log(getData)
  const handleReadData = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>{
      setGetData(res.data)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    handleReadData()
  },[])

  return <div className=" mt-10 ml-10 mr-20">
<table>
  <thead className="bg-teal-500 text-white">
    <tr>
      <th className=" text-2xl px-8 py-3">UserID</th>
      <th className=" text-2xl px-8 py-3">ID</th>
      <th className=" text-2xl px-8 py-3">Title</th>
      <th className=" text-2xl px-8 py-3">Body</th>
    </tr>
  </thead>
  {
    getData.map ((item) =>{
      return <AppData photos={item} />
   })
  }
</table>
  </div>
}
export default API