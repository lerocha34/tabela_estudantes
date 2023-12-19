import { Grade } from "./components/grades";

const template = () => {
  return (
    <table className="container w-8/9 bg-gray-400 mx-auto m-2 rounded p-2">
      <thead>
        <tr className="bg-gray-800">
          <th className="font-bold white text-left border-2 border-solid border-red-500 pl-1">Name</th>
          <th className="font-bold white  border-2 border-solid border-red-500 text-center">Status</th>
          <th className="font-bold white  border-2 border-solid border-red-500 text-center">Grade 1</th>
          <th className="font-bold white  border-2 border-solid border-red-500 text-center">Grade 2</th>
          <th className="font-bold white  border-2 border-solid border-red-500 text-center">Final Grade</th>
        </tr>
        </thead>
        <tbody className="text-black font-bold">
          
            <Grade/>
          
        </tbody>
      
    </table>
  )
}


export default template;

