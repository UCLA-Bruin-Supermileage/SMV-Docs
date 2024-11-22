import Card from './Card.tsx'

const members = ["Abhiram", "Aidan", "Daniel", "Daphne", "Enrique", "Howard", "Lily", "Matthew"]
const headshots = ["Abhiram.JPG", "", "Daniel.png", "Daphne.JPG", "Enrique.png", "Howard.PNG", "Lily.jpg", "Matthew.jpg"]

export default function Meet(): JSX.Element {
    return (
        <div className="pt-6">
            {members.map((member, index) => {
                return <Card username={member} pfp={headshots[index]}/>
            })}
            
        </div>

    );
}
  