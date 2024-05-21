import { Button } from "@/Components/ui/button";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            {/* <div className="py-12 px-5 sm:py-20">
                <Wrapper>
                    <div className="mx-auto flex px-5 py-12 sm:py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:max-w-3xl lg:pl-20 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
                            <div className="max-w-4xl">
                                <h1 className="text-5xl font-extrabold md:text-6xl">
                                    All Your Style <span className="text-orange-500">Are Here</span>
                                </h1>

                                <p className="my-6 text-lg text-slate-500">
                                    This e commerce website is a platform where you can order or
                                    purchase <span className="text-orange-500">Clothing</span> items and
                                    you can also find other items.
                                </p>

                                <Link href="/products">
                                    <Button className="text-md py-6 px-8">
                                        Buy Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:max-w-lg xl:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center items-center">
                            <img
                                className="object-cover object-center rotate-12 w-[350px] h-[350px] lg:w-[450px] lg:h-[300px]"
                                src={"/pink-sweater.png"}
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </Wrapper>
            </div> */}

            <Wrapper>
                <div className="relative flex justify-between gap-16 py-12 px-8 sm:py-20">
                    <div className="flex flex-1 flex-col justify-between py-12 pt-0 pb-4">
                        <div className="flex flex-col justify-center gap-[2.5rem]">
                            <h3 className="text-[#2B00FF] font-semibold bg-[#e1edff] h-[40px] w-[100px] flex justify-center items-center rounded-lg">
                                Sale 70 %
                            </h3>

                            <h1 className="text-4xl md:text-5xl text-black font-extrabold">
                                An Industrial Take on Streetwear
                            </h1>

                            <p className="text-lg font-medium text-gray-700 max-w-lg md:max-w-2xl">
                                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                            </p>

                            <button
                                className="bg-black text-white p-4 w-40"
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
        </>
    )
};

export default Hero;