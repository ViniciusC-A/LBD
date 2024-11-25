import { LocationIcon } from "@/components/icons";

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
                <div className="w-full rounded-md bg-slate-200 shadow-black shadow-sm">
                    <div>
                        <label htmlFor=""></label>
                    </div>

                </div>
            </div>
        </div>
    );
}