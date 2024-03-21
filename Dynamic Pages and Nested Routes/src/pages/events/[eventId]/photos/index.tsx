import { photos } from "../../../../../data/photos"
import { Photo } from "../../../../../types/Photo"
import { events } from "../../../../../data/events"

interface Props {
    photos: Photo[]
}
export default function EventPhotos({ photos }: Props) {

    return (
        <div style={{fontSize: 30}}>
            {photos.length > 0 ?
                <div>
                    {photos.map((photo) =>
                    (
                        <div>
                            <img src={photo.url} />
                        </div>
                    ))}
                </div>
                : <>No photos for this event</>}
        </div>
    )
}



export function getServerSideProps(context: any) {
    let { params } = context

    let existingId = events.find((event) => event.id === Number(params.eventId))
   
    if (!existingId) {
        return {
            notFound: true,
        }
    }

    let eventPhotos = photos.filter((photo) => photo.eventId === Number(params.eventId))
   

    return {
        props:
        {
            photos: eventPhotos
        }
    }
}