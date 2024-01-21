import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <h1 className="text-4xl font-bold">Cortito</h1>

        <Image
        src="/cortito.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      </main>
    );
}
