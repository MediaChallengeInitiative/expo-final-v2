import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Row,
  Column
} from "@react-email/components";

interface TicketProps {
  ticketNumber: string;
  fullName: string;
  email: string;
  expoDate: string;
  location: string;
}

const Ticket: React.FC<TicketProps> = ({
  ticketNumber,
  fullName,
  email,
  expoDate,
  location
}) => {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Text style={header}>Africa Media and Careers Expo 2024</Text>
          <Container style={ticketContainer}>
            <Row style={ticketRow}>
              <Column style={ticketColumn}>
                <Text style={label}>Ticket Number</Text>
                <Text style={value}>{ticketNumber}</Text>
              </Column>
              <Column style={ticketColumn}>
                <Text style={label}>Full Name</Text>
                <Text style={value}>{fullName}</Text>
              </Column>
            </Row>
            <Row style={ticketRow}>
              <Column style={ticketColumn}>
                <Text style={label}>Email</Text>
                <Text style={value}>{email}</Text>
              </Column>
              <Column style={ticketColumn}>
                <Text style={label}>Expo Date</Text>
                <Text style={value}>{expoDate}</Text>
              </Column>
            </Row>
            <Row style={ticketRow}>
              <Column>
                <Text style={label}>Location</Text>
                <Text style={value}>{location}</Text>
              </Column>
            </Row>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px"
};

const header = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0"
};

const ticketContainer = {
  border: "1px solid #e1e1e1",
  borderRadius: "5px",
  padding: "20px",
  backgroundColor: "#f8f8f8"
};

const ticketRow = {
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0"
};

const ticketColumn = {
  width: "48%"
};

const label = {
  fontSize: "14px",
  color: "#666666",
  marginBottom: "5px"
};

const value = {
  fontSize: "16px",
  color: "#000000",
  fontWeight: "bold"
};

export default Ticket;
