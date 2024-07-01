"use client";

import { useState, useEffect } from "react";

async function getEvents() {
  try {
    const response = await fetch("http://localhost:3000/api/events");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Ini Halaman Event</h1>
      <ul>
        {events.map((item: any) => (
          <li key={item.id}>{item.title} {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
