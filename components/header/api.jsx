import { headers } from "next/headers";

const Home = () => {
    const ip = headers().get("x-real-ip");

    return (
        <main>
            <p>IP Address:</p>
            <h1>{ip}</h1>
        </main>
    );
};
export default Home;
