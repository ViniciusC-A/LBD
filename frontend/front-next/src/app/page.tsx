'use client';

import { HotelCard } from "@/components/HotelCard";
import { LocationIcon, PlusIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
        
        <button className="rounded-md py-2 px-6 bg-primary text-white font-semibold  active:scale-95 flex items-center justify-center  gap-2">
          <p>Adicionar Hotel</p> 
          {PlusIcon() }</button>
        <HotelCard 
          onClick={() => router.push("/hotels/1")}
          source={"/hotel-room-2.avif"} 
          data={{
            title: "Suíte Aconchegante no Centro",
            description: "Localizada no coração da cidade, esta suíte moderna oferece uma cama king-size, ar-condicionado e uma charmosa varanda com vista para a praça central. Ideal para casais ou viajantes a negócios, com fácil acesso a restaurantes e pontos turísticos.",
            pricing: "R$ 350",
            location: "Avenida Central, Centro, São Paulo, Brasil"
          }} 
        />
        <HotelCard 
          onClick={() => router.push("/hotels/2")}
          source={"/hotel-room-6.avif"} 
          data={{
            title: "Apartamento Elegante com Vista para o Mar",
            description: "Desfrute do máximo conforto neste apartamento sofisticado com dois quartos, cozinha completa e sala de estar espaçosa. Relaxe na varanda com vista deslumbrante para o oceano. Perfeito para famílias ou grupos que buscam uma estadia inesquecível na praia.",
            pricing: "R$ 450",
            location: "Avenida Beira-Mar, Florianópolis, Brasil"
          }} 
        />
      </div>
    </div>
  );
}
