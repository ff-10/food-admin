import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import { Caption, DashboardBody, FlexContainer, Orders, Salary } from "./Dashboard.styled";
import Donut from "./Donut";





export default function Dashboard() {



    return (
        <Container>
            <Header />
            <Sidebar />
            <Footer />

            <DashboardBody>

                <FlexContainer>
                    
                    <Orders>
                        <Caption>Orders</Caption>
                        <Donut width={450} />
                    </Orders>

                    <Salary>
                        Salary Chart
                    </Salary>

                </FlexContainer>

            </DashboardBody>

        </Container>
    )
}
