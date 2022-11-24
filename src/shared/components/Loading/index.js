import { LoadingImage } from "./Loading.styled";
import loadingGif from "../../../images/loading.gif"


export default function Loading() {

    return (
        <LoadingImage src={loadingGif} alt="Loading..." />
    )

}