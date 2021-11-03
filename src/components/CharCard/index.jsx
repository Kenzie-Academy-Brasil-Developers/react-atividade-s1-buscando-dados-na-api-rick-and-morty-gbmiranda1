import "./style.css"

function CharCard({ personagem }) {

    return (
        <div className={`container-card ${personagem.status !== "Alive" && "mudarCor"}`}>
            <span>{personagem.name}</span>
            <img src={personagem.image} alt="" />
        </div>
    )
}

export default CharCard