import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/FAQ">FAQ</FooterLink>
            <FooterLink href="/team">Leadership Team</FooterLink>
            <FooterLink href="/references">Clients & Partners</FooterLink>
            <FooterLink href="/conditions">Terms & Conditions</FooterLink>
            <FooterLink href="/privacypolicy">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">writeitmedia@gmail.com</FooterLink>
            <FooterLink> 0738-405840</FooterLink>
            <FooterLink>Aschebergsgatan 9</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FooterLink href="#" style={{ marginLeft: "10%", fontSize: "25px" }}>
                <i className="fab fa-facebook-f">
                </i>
              </FooterLink>
              <FooterLink href="https://www.instagram.com/writeitmedia/" style={{ marginLeft: "10%", fontSize: "25px" }}>
                <i className="fab fa-instagram">
                </i>
              </FooterLink>
              <FooterLink href="#" style={{ marginLeft: "10%", fontSize: "25px" }}>
                <i className="fab fa-twitter">
                </i>
              </FooterLink>
            </div>
          </Column>
        </Row>
      </Container>
      <div style={{ color: "white", fontSize: "12px", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "7%" }}>
        <p>Org-number: 969796-5417</p>
        <p>© 2022 - ALL RIGHTS RESERVED. DESIGN BY WRITE IT MEDIA </p>
        <p>STYLING WITH © BOOTSTRAP </p>
      </div>
    </Box>
  );
};
export default Footer;