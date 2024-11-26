'use client';
import { LocationIcon, PlusIcon } from "@/components/icons";

export default function Page() {
    return (
        <div className="h-screen w-full bg-background">
            <div className="w-full shadow-md shadow-gray-400 p-4 flex items-center justify-center bg-secondary">
                <p 
                className="text-primary w-min text-2xl font-extrabold items-center justify-center flex flex-row gap-2"
                >
                RoomFinder {LocationIcon("h-6 w-6 text-[#a11d37]")}
                </p>
            </div>
            <div className="w-full p-16">
                <div className="w-full rounded-md items-center gap-6 py-6 justify-center flex flex-col bg-slate-50 shadow-gray-400 shadow-lg">
                    <div className="p-2 flex w-full flex-col gap-2 ">
                        <label className="text-text">Nome</label>
                        <input type="text" placeholder="Nome" className="w-full p-2 rounded-md border-2 focus:border-primary focus:ring-0 focus:outline-none" />
                        <label className="text-text">Descrição</label>
                        <input type="text" placeholder="Descrição" className="w-full p-2 rounded-md border-2 focus:border-primary focus:ring-0 focus:outline-none" />
                        <label className="text-text">Rua</label>
                        <input type="text" placeholder="Descrição" className="w-full p-2 rounded-md border-2 focus:border-primary focus:ring-0 focus:outline-none" />
                        <label className="text-text">Cidade</label>
                        <input type="text" placeholder="Cidade" className="w-full p-2 rounded-md border-2 focus:border-primary focus:ring-0 focus:outline-none" />
                        <label className="text-text">Estado</label>
                        <input type="text" placeholder="Endereço" className="w-full p-2 rounded-md border-2 focus:border-primary focus:ring-0 focus:outline-none" />
                        <label className="text-text">CEP</label>
                        <input type="text" placeholder="Descrição" className="w-full p-2 rounded-md border-2 focus:border-primary focus:ring-0 focus:outline-none" />
                    </div>
                    <button onClick={() => {}} className="rounded-md py-2 px-6 bg-primary text-white font-semibold  active:scale-95 flex items-center justify-center  gap-2">
                        <p>Adicionar Hotel</p> 
                        {PlusIcon() }
                    </button>
                </div>
            </div>
        </div>
    );
}