import axios from "axios"
import { useEffect, useState } from "react"

function App (){


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
      return <tbody>
    <tr>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{item.userid}</td>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{item.id}</td>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{item.title}</td>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{item.body}</td>
    </tr>
  </tbody>
   })
  }
</table>
  </div>
}
export default App