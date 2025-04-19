import LikeButton from './like-button';
import Users from './users';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <Users></Users>
            <LikeButton></LikeButton>
        </div>
    );
}