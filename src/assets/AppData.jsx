function AppData ({photos}){
    return <tbody>
    <tr>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{photos.userid}</td>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{photos.id}</td>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{photos.title}</td>
      <td className="text-xl text-center py-2 border-l-2 border-slate-700 border-b-2 ">{photos.body}</td>
    </tr>
  </tbody>
}
export default AppData