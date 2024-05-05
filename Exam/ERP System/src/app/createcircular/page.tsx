"use client";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  statistics: ReactNode;
  charts: ReactNode;
}

export async function getServerSideProps({ params }: any) {
  const { eventId } = params;

  const response = await fetch(`http://localhost:3000/circulars/api/circulars`);
  const event = await response.json();

  return {
    props: {
      event: event,
    },
  };
}
