import { Container } from "./PageContainer.styled";


export default function PageContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
};

