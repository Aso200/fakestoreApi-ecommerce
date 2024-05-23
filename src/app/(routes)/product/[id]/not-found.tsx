"use client";
import Wrapper from "@/Components/Wrapper";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {

    const router = useRouter();

    return (
        <div className="flex items-center justify-center px-6 sm:px-20 pt-12 pb-6">
            <Wrapper>
                <div className="max-w-2xl min-h-[300px] sm:min-h-[350px] flex flex-col items-center justify-center gap-y-5 md:gap-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Your Page Not Found</h2>

                    <p className="text-md md:text-lg font-medium text-center">
                        Oops! The page you are looking for does not exist. It might have been
                        moved or deleted.
                    </p>

                    <button
                        className="bg-black hover:bg-black/95 text-white py-4 px-5 rounded-md"
                        onClick={() => { router.push("/"); }}
                    >
                        Back to Home
                    </button>
                </div>
            </Wrapper>
        </div>
    )
};

export default NotFoundPage;