import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import { Actions, Caption, DashboardBody, DimmedEmptyText, FlexContainer, Orders, Risks, Salary } from "./Dashboard.styled";

import Donut from "./Donut";
import BarChart from "./BarChart";




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
                        <Donut width={350} />
                    </Orders>

                    <Salary>
                        <Caption>Total Salary</Caption>
                        <BarChart />
                    </Salary>

                </FlexContainer>

                <FlexContainer style={{ marginTop: 24 }}>
                    <Risks>
                        <Caption>
                            Assigned Risks
                        </Caption>
                        <DimmedEmptyText>
                            <p>There are no risks assigned.</p>
                        </DimmedEmptyText>
                    </Risks>

                    <Actions>
                        <Caption>
                            Assigned Action Items
                        </Caption>
                        <DimmedEmptyText>
                            <p>There are no action items assigned.</p>
                        </DimmedEmptyText>
                    </Actions>
                </FlexContainer>


            </DashboardBody>

        </Container>
    )
}
