'use client'
import React from "react"

type Props = {
    source: string,
    data: {
        title: string,
        description: string
        pricing: string
        location: string
    }
}

const HotelCard: React.FC<Props> = ({
    source,
    data
}) => {
    return (
        <div  className="flex flex-row gap-2 hover:ring-4 hover:ring-primary hover:cursor-pointer bg-secondary rounded-md p-4 shadow-sm shadow-gray-400">
            
            <div className="flex flex-col p-2">
              <div className="w-full items-center justify-center flex pb-2">
                <p className="text-text font-bold text-lg ">{data.title}</p>
              </div>
              <div className="w-full items-start justify-start flex text-start pb-5">
                <p className="text-text font-medium ">{data.description}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-text font-semibold">Preço:</p>
                <p className="text-text font-medium ">{data.pricing}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-text font-semibold">Localização:</p>
                <p className="text-text font-medium ">{data.location}</p>
              </div>
            </div>
        </div>
    )
}

export { HotelCard }