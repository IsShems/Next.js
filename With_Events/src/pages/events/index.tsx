import { useState, useEffect } from "react";
import { CustomDiv } from "@/components/CustomDiv";
import { CustomUl } from "@/components/CustomUl";
import { inter } from "@/fonts";
import Link from "next/link";
import { Event } from "@/types/Event";
import { useRouter } from "next/router";

interface Props {
  events: Event[];
}

export default function EventsPage({ events }: Props) {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const router = useRouter();

  const filterEvents = (type: string) => {
    const filtered = events.filter((event) => event.type === type);
    setFilteredEvents(filtered);
    router.push(`/events?type=${type}`, undefined, { shallow: true });
  };

  const showAllEvents = () => {
    setFilteredEvents(events);
    router.push("/events", undefined, { shallow: true });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/events");
        const data = await response.json();
        setFilteredEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <CustomDiv className={inter.className}>
      <div>
        <button className="filter-btn" onClick={() => filterEvents("holiday")}>
          Holiday Events
        </button>
        <button className="filter-btn" onClick={() => filterEvents("charity")}>
          Charity Events
        </button>
        <button
          className="filter-btn"
          onClick={() => filterEvents("networking")}
        >
          Networking Events
        </button>
        <button className="filter-btn" onClick={showAllEvents}>
          All Events
        </button>
      </div>

      {filteredEvents.map((event) => (
        <CustomUl style={{ fontSize: 30, display: "flex" }} key={event.id}>
          <Link href={`/events/${event.id}`}>
            <br />
            <li>
              {event.id}. {event.name}
            </li>
          </Link>
        </CustomUl>
      ))}

      <style jsx>{`
        .filter-btn {
          margin-left: 10px;
          background-color: #c90a4d;
          color: #fff;
          border: none;
          border-radius: 3px;
          padding: 5px 10px;
          cursor: pointer;
        }

        .filter-btn:hover {
          background-color: #450419;
        }
      `}</style>
    </CustomDiv>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/events");
  const events = await response.json();

  return {
    props: {
      events,
    },
  };
}
