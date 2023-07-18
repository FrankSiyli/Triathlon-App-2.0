import Image from "next/image";
import logo from "public/images/logoSmall.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="scale-150"
        src={logo}
        alt="logo"
        width={700}
        height={700}
      />
    </main>
  );
}
