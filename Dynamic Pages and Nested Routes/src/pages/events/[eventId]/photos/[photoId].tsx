import { events } from "../../../../../data/events"
import { photos } from "../../../../../data/photos"
import { Photo } from "../../../../../types/Photo"

interface Props
{
    photo: Photo
}


export default function EventPhoto({photo} : Props) 
{
    return (
        <div>
            <img src={photo.url}/>
        </div>
    )

}


export function getServerSideProps(context: any)
{
    let { params } = context
    let eventId = Number(params.eventId)

    let existingEvent = events.find((event) => event.id === eventId)

    if (!existingEvent) {
        return {
            notFound: true,
        }
    }

    let eventPhotos = photos.filter((photo) => photo.eventId === eventId)

    if (eventPhotos.length === 0) {
        return {
            notFound: true,
        }
    }

    let photo = eventPhotos[Number(params.photoId) - 1]
    if (!photo) {
        return {
            notFound: true,
        }
    }

    return {
        props:
        {
            photo: photo
        }
    }
}