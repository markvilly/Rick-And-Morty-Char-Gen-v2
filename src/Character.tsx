
import Button from "./Button";
import {useState, useEffect} from "react"


export default function Characters(){

   
    interface IResults {
        id:number 
        name: string 
        status: string 
        image: string
        species: string

    }

    

    const [data2, setData2] = useState<number >(1)
    const [resource, setResource] = useState<IResults | null>(null)
    // const [random, setRandom] = useState<number>(0)
    function generateRandomNumber( ): number{
        const randomNumber = Math.floor(Math.random() * 182) + 1;
        setData2(randomNumber)
        return randomNumber
    }
    console.log(data2)

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://rickandmortyapi.com/api/character/${data2}`)
            if(!response.ok){
                throw new Error("Failed to fetch data.")
            }
            const data = await response.json()
            console.log(data)
            if(data){
                setResource(data)
            }
            return data
        }

        fetchData()


    },[data2])

    // const rand = resource ? resource.: 100
    
    return (
        <>
        <div className="flex flex-col justify-center px-8 text-center">
        <div className="content bg-gray-100 border rounded p-10 ">
                {/* <h1>{data}</h1> */}
                <h1 className="text-4xl text-green-400 font-bold">Rick and Morty</h1>
                <h3 className="text-2xl text-yellow-600">Where are they now?</h3>
                <h3>Character Generator v2</h3>
                <div className="image flex justify-center">
                    <img className="rounded" src={resource?.image} alt=""/>
                </div>
                <div className="text-center">
                <h3 className="text-3xl">{resource?.name}</h3>
                <p>Status: {resource?.status}</p>
                <p>Species: {resource?.species}</p>

                </div>
            <div className="next-prev">
                {/* <Button color="bg-red-500" value="Prev"/>
                <Button color="bg-green-600" value="Next" /> */}
            </div>
            <Button color="bg-yellow-600" value="Generate Next Character" onBtnClick={()=>{
                generateRandomNumber()

            }}/>
            </div>
        </div>
            
        </>
    )
}