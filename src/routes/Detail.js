import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { async } from "q";

function Detail() {
    const {id} = useParams();
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const data = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setInfos(data.data.movie);
        setLoading(false);
    };
    useEffect(() => { getMovie() }, []);
    // console.log(infos)

    return (
        <div>
            <img src={infos.medium_cover_image} alt={infos.title}/>
            <h1>{infos.title_long}</h1>
            <div>
                {loading ? (<p>Loading...</p>) : (
                    <ul>
                        <li>Rate: {infos.rating}</li>
                        <li>Running Time: {infos.runtime}</li>
                    </ul>
                )}
            </div>
            <div>
                <ul>
                    {/* {infos.genres.map(gen => <li key={gen}>{gen}</li>)} */}
                </ul>
            </div>
            <p>{infos.description_full}</p>
        </div>
    );
}

export default Detail;