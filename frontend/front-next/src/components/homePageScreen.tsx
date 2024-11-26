'use client'
import { HotelCard } from "@/components/HotelCard";
import { LocationIcon, PlusIcon } from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePageScreen() {
  const [hotels, setHotels] = useState<any[]>([]); // Usando um tipo genérico para os hotéis
  const router = useRouter();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/api/hotels'); // A URL do seu endpoint GET para hotéis
        if (!response.ok) {
          throw new Error('Erro ao carregar hotéis');
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error('Erro ao buscar hotéis:', error);
      }
    };

    fetchHotels();
  }, []);


  return (
    <div className="h-screen bg-background">
      <div className="w-full shadow-md shadow-gray-400 p-4 flex items-center justify-center bg-secondary">
        <p 
          className="text-primary w-min text-2xl font-extrabold items-center justify-center flex flex-row gap-2"
        >
          RoomFinder {LocationIcon("h-6 w-6 text-[#a11d37]")}
        </p>
      </div>
      <div className="w-full flex flex-col gap-6 items-center justify-center p-16">
        
        <Link href="/hotels" className="rounded-md py-2 px-6 bg-primary text-white font-semibold  active:scale-95 flex items-center justify-center  gap-2">
          <p>Adicionar Hotel</p> 
          {PlusIcon() }</Link>
          {hotels.length > 0 ? (
          hotels.map((hotel: any) => (
            <HotelCard
              key={hotel.id} // Certifique-se de que o hotel tenha um id único
              source={hotel.imageUrl || '/default-hotel-image.avif'} // Ajuste conforme sua estrutura
              data={{
                title: hotel.title,
                description: hotel.description,
                pricing: hotel.pricing,
                location: hotel.location,
              }}
            />
          ))
        ) : (
          <p>Carregando hotéis...</p>
        )}
      </div>
    </div>
  );
}
