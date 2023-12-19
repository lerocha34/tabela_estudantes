import { students } from "../data/student";

 type data = {
    id:number;
    active:boolean;
    name:string;
    email:string;
    avatar:string;
    grade1:number;
    grade2:number;
    grade3:number;
}


export function Grade(d:data){

    const name = students.map(studentName => <tr className="border-b-4 pb-2 border-b-black border-solid text-center">
        <td className="flex items-center content-center p-3 text-left">
        <img className="w-16 h-16 rounded-full mr-3" src={studentName.avatar}></img>
       <div className="flex-col">
        {studentName.name}
        <div className="text-sm font-light">{studentName.email}</div>
        </div></td>
    <td>{studentName.active ? <div className="m-auto w-2/3 h-2/3 bg-green-500 rounded text-white">Online</div>: <div className="w-2/3 h-2/3 bg-red-500 rounded text-white m-auto">Offline</div>}</td>
    <td>{studentName.grade1}</td>
    <td>{studentName.grade2}</td>
    <td>{studentName.grade3 = ((studentName.grade1 + studentName.grade2)/2)}</td>
    </tr>)
    

    return (
        <>
       
        {name}
       
        </>
    )
}