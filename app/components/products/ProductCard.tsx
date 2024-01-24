"use client";

import { formatPrice } from "@/utils/formatPrice use";
import { truncateText } from "@/utils/truncateText use";
import Image from "next/image";

interface ProductCardProps {
    data: any;
    onAddToCart: (product: any) => void;
}

const ProductCard:React.FC<ProductCardProps> = ({data, onAddToCart}) => {
    const handleAddToCart = () => {
        onAddToCart(data);
    };

    return (
        <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1"></div>
            <div className="aspect-square overflow-hidden relative w-full">
                <Image fill src={data.images[0].image} alt={data.name} className="w-full h-full object-contain" />
            </div>
            <div className="mt-4">{truncateText(data.name)}</div> 
            <div></div>
            <div>{data.reviews.length} reviews</div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
            <div>
                <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;