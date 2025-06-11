import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const reviewsData = [
    {
        id: 1,
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
        name: "Judith Black",
        role: "CEO of Workcation",
        image: "/img1.png"
    },
    {
        id: 2,
        quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.",
        name: "Marco Rossi",
        role: "CTO di TechCorp",
        image: "/img2.png"
    },
    {
        id: 3,
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        name: "Sofia Bianchi",
        role: "Marketing Director",
        image: "/img3.png"
    }
];

export default function Reviews() {
    return (
        <section id="testimonianze" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"/>
            <div
                className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"/>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 className="text-5xl flex justify-center font-bold mb-10">
                    Testimonianze
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {reviewsData.map((review) => (
                        <Card key={review.id} className="shadow-xl">
                            <CardContent className="p-6 flex flex-col justify-between items-center text-center h-full">
                                <div className="mb-6">
                                    <blockquote className="text-lg font-medium text-gray-900 italic">
                                        "{review.quote}"
                                    </blockquote>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Image
                                        alt={`${review.name} profile picture`}
                                        src={review.image}
                                        width={100}
                                        height={100}
                                        className="w-16 h-16 rounded-full object-cover mb-4"
                                    />
                                    <div className="font-semibold text-gray-900">{review.name}</div>
                                    <div className="text-sm text-gray-600 mt-1">{review.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}