import { prisma } from "@/lib/prisma"
import React from 'react'

const getTrips = async () => {
  const trips = await prisma.trip.findMany({})

  return trips
}

const Trips = async () => {
  const data = await fetch("https://zelda.fanapis.com/api/games?limit=2", {
    next:{
      revalidate: 10
    }
  }).then((res) => res.json())

  return (
    <div>
      {data.data.map((i: any) => (
        <>
          <h2 className="m-10" key={i.id}>{i.name}</h2>
          <p className="ml-5" key={i.id}>{i.description}</p>
        </>
      ))}
    </div>
  )
}

export default Trips