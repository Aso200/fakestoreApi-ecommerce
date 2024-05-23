"use client";
import Wrapper from "./Wrapper";
import { useRouter } from "next/navigation";

const Hero = () => {

    const router = useRouter();

    return (
        <div className="px-6 sm:px-20 py-12 sm:py-20">
            <Wrapper>
                <div className="relative flex justify-between gap-16">
                    <div className="flex flex-1 flex-col justify-between py-12 pt-0 pb-4">
                        <div className="flex flex-col justify-center gap-[2.5rem]">
                            <h3 className="text-[#2B00FF] font-semibold bg-[#e1edff] h-[40px] w-[100px] flex justify-center items-center rounded-lg">
                                Sale 70 %
                            </h3>

                            <h1 className="text-4xl md:text-5xl text-black font-extrabold">
                                An Industrial Take on Streetwear
                            </h1>

                            <p className="text-lg font-medium text-gray-700 max-w-lg md:max-w-2xl">
                                Anyone can beat you but no one can beat your outfit as long as you wear Prime outfits.
                            </p>

                            <button
                                className="bg-black hover:bg-black/95 text-white p-4 w-40 rounded-md"
                                onClick={() => { router.push("/products"); }}
                                type="button"
                            >
                                Start Shopping
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-1">
                        <div>
                            <img
                                className="bg-[#FFECE3] rounded-full"
                                src="/hero.png"
                                alt="hero"
                                width={500}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default Hero;