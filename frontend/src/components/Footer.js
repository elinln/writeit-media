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
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">writeitmedia@gmail.com</FooterLink>
            <FooterLink> 0738-405840</FooterLink>
            <FooterLink>Aschebergsgatan 9</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/writeitmedia/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <div style={{ color: "white", fontSize: "12px", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "7%" }}>
        <p>Org-number: 969796-5417</p>
        <p>© 2022 - ALL RIGHTS RESERVED. DESIGN BY WRITE IT MEDIA </p>
      </div>
    </Box>
  );
};
export default Footer;