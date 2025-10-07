import Breadcrumbs from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import React from "react";

const ContactPage = () => {
  return (
    <Container>
      <Breadcrumbs items={[{ href: "", label: "Contact Us" }]} />
    </Container>
  );
};

export default ContactPage;
