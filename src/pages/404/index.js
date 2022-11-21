import { useNavigate } from "react-router-dom";
import img404 from "../../images/404.jpg";
import { Container, GoBackBtn, Img, ImgContainer } from "./Page404.styled";

export default function Page404() {

    const navigate = useNavigate();

    return (

        <Container>

            <ImgContainer>
                <Img src={img404} alt="Error 404: Not Found" />
            </ImgContainer>
            <GoBackBtn onClick={() => navigate('/dashboard')}>GO BACK</GoBackBtn>

        </Container>

    )

}


