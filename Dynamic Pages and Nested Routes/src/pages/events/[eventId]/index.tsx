import { events } from "../../../../data/events";
import { photos } from "../../../../data/photos";
import { Event } from "../../../../types/Event"; 
import styles from '../../../styles/EventDetails.module.css';
import NotFound from "../not-found";
import { GetServerSidePropsContext } from 'next';

interface Props {
  event: Event | null;
}

export default function EventDetails({ event }: Props) {
    if (!event) {
        return <NotFound />;
      }
      else{
        const eventPhotos = photos.filter(photo => photo.eventId === event.id);

        return (
          <div className={styles.eventContainer}>
            <h1 className={styles.eventTitle}>{event.title}</h1>
            <p className={styles.eventDescription}>{event.description}</p>
            <div className={styles.photoContainer}>
              {eventPhotos.map(photo => (
                <div key={photo.id} className={styles.photoItem}>
                  <img src={photo.url} alt={`Photo ${photo.id}`} />
                </div>
              ))}
            </div>
          </div>
        );
      }
    
  }

  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const eventId = context.params?.eventId as string;
    const selectedEvent = events.find(event => event.id === Number(eventId)) || null;
  
    return {
      props: {
        event: selectedEvent,
      },
    };
  }
  
