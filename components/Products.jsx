import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Products() {
    const prodotti = [
        {
            id: 1,
            name: "One Piece",
            description: "Carta di Luffy, dopo aver ucciso big mom",
            image: "/prodotto1.png"
        },
        {
            id: 2,
            name: "Dragon Ball",
            description: "Carta di Son Goku",
            image: "/prodotto2.png"
        },
        {
            id: 3,
            name: "Dragon Balls",
            description: "Carta di Goku",
            image: "/prodotto3.png"
        },
    ]
    return (
        <>
            <div className="mb-10">
                <h2 className="text-5xl flex justify-center mt-10 font-bold mb-10"> Le Nostre Carte </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto max-w-6xl">
                    {prodotti.map((prodotto) => (
                        <Card key={prodotto.id} className="shadow-xl" >
                            <CardContent className="p-4 flex flex-col items-center">
                                <Image src={prodotto.image}
                                       alt={prodotto.name}
                                       width={300}
                                       height={300}
                                       className="object-contain rounded-xl"
                                />
                                <h2 className="flex text-2xl justify-center ">{prodotto.name}</h2>
                                <div>{prodotto.description}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Button className=" w-80 h-15 text-2xl ">
                        <Link href="/collezione">
                            Scopri la nostra collezione
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}