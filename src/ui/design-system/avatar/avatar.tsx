import { clsx } from "clsx";
import Image from "next/image";

interface Props{
    size?: "small" | "medium" | "large";
    src: string;
    alt: string;
}



export default function Avatar({ size = "medium", src, alt }: Props) {
    let sizeAvatar : string = "" ;
    
    switch (size) {
        case "small":
            sizeAvatar = "w-[24px] h-[24px]";
            break;
        case "medium":// default
            sizeAvatar = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeAvatar = "w-[500px] h-[500px]";
            break;
    }
  return (
    <div  className={clsx(sizeAvatar, "bg-gray-400 rounded-full relative")}>
      <Image
        fill
        src={src}
        alt={alt}
        // width={50}
        // height={50}
        className= "object-cover object-top rounded-full"
      />
    </div>
  )
}