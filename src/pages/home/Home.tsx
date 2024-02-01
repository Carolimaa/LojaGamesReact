import homeLogo from '../../assets/home.svg'
import './Home.css';

function Home() {
    
    return (
        <>
            <div className="bg-gray-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>GameGen: A Experiência Definitiva para Gamers

</h2>
                        <p className='text-xl'>Bem-vinde ao futuro da compra de jogos! GameGen não é apenas uma loja de games, é uma plataforma que redefine a forma como os gamers descobrem, compram e compartilham suas experiências de jogo.</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-purple-950 text-white py-2 px-4'>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;