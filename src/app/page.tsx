import Image from "next/image";
import { InstallPrompt } from "./InstallPrompt";
import { PushNotificationManager } from "./PushNotificationMananger";
import artBoard from "/public/img/art-board.png";
import customLoop from "/public/img/custom-loop.png";
import serverImg from "/public/img/server-img.png";
import Hero from "./Hero";
import CustomLoop from "./CustomLoop";

export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <Hero />
      <InstallPrompt />
      <CustomLoop />
      <div className="flex flex-col gap-3">
        <Image
          src={artBoard}
          alt=""
          width={400}
          height={400}
          objectFit="cover"
        />
        <Image
          src={customLoop}
          alt=""
          width={400}
          height={400}
          objectFit="cover"
        />
        <Image
          src={serverImg}
          alt=""
          width={400}
          height={400}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
