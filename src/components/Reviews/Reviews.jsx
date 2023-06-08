import { useParams } from "react-router-dom"


export const Reviews = () => {
    const { MoviesID}=useParams()
    return (
        <div>Reviews {MoviesID}</div>
    )

}