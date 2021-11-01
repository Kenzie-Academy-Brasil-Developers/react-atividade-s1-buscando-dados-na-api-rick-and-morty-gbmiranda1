import CharCard from "../CharCard"
import "./style.css"

function Characters({ characterList }) {
    return (
        <div>
            <h1 >Meus Personagens</h1>
            <div className="container">
                {
                    characterList.map((item, index) => (
                        <CharCard key={index} personagem={item}></CharCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Characters