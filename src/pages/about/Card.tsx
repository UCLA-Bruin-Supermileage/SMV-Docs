function Card(props) {
    return(
        <div className="card">
            <img className="card-image" src="https://placehold.co/150x150" alt="profile picture"></img>
            <h2 className="card-title">{props.username}</h2>
            <p className="card-text">Placeholder test.</p>
        </div>
    );
}

export default Card