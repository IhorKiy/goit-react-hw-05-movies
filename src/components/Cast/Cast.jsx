import { useParams } from "react-router-dom"


export const Cast = () => {
    const { MoviesID } = useParams();
    console.log(MoviesID);
    return (
        <div>MovieCast {MoviesID}</div>
    )

}