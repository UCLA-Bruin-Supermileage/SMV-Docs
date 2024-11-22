import useBaseUrl from '@docusaurus/useBaseUrl';

function Card(props) {
    let pfp_url = "https://placehold.co/150x150"
    if (props.pfp != "") {
        pfp_url = '/img/people/' + props.pfp;
    }
    
    return (
        <div className="card">
            <img className="card-image" src={useBaseUrl(pfp_url)} alt="profile picture"></img>
            <h2 className="card-title">{props.username}</h2>
            <p className="card-text">Placeholder test.</p>
        </div>
    );
}

export default Card