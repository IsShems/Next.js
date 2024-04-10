import { CustomDiv } from "@/components/CustomDiv"
import { CustomImage } from "@/components/CustomImage"
import { inter } from "@/fonts"
import { useRouter } from "next/router"

interface Props
{
    car: Car
}

export default function CarDetails({car}: Props)
{
    let router = useRouter()
    if (router.isFallback)
    {
        return <>Loading...</>
    }

    return (
        <CustomDiv className={inter.className} >
            <h1>{car.make} {car.model}</h1>
            <br/>
            {car.url ? <CustomImage src={car.url}/>: <></>}
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
            <p>Color:{car.color}</p>
        </CustomDiv>
    )
}

export function getStaticPaths()
{
    return {
        paths: [
            {
                params: {
                    carId: '1'
                }
            },
        ],
        fallback: true
    }
}


export async function getStaticProps(context: any)
{
    const {
        params: {carId}
    } = context
    const response = await fetch(`http://localhost:3000/cars/${carId}`)
   
    let car = await response.json()

    return {
        props:
        {
            car: car
        }
    }
}