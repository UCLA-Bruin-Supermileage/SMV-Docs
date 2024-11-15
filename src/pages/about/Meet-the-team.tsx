import Card from './Card.tsx'

const members = ["Abhiram", "Aidan", "Daniel", "Daphne", "Enrique", "Howard", "Lily", "Matthew"]
const headshots = []

export default function Meet(): JSX.Element {
    return (
        <div className="pt-6">
            {members.map((member) => {
                return <Card username={member}/>
            })}
            
        </div>

    );
}
  