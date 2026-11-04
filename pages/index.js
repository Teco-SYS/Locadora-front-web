import { filmes } from "../Data/filmes"



function Home() {
    return filmes.map(filme => {

        return <>
            <FilmesCard filme={filme} />
        </>

    })
}

function FilmesCard({ filme }) {
    return <ul>
        <li>
            <p>Titulo: {filme.titulo}</p>
            <p>Ano: {filme.ano}</p>
            <p>Genero: {filme.genero}</p>
        </li>
    </ul>
}

export default Home