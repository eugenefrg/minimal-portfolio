import { Card, Col, Layout, Row, Space, Typography } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import data from "./assets/data";
import CatWire from "./assets/images/siteDesign/catWire-pass-thru-40.svg";
import { CertificationList } from "./components/CertificationList";
import { EducationList } from "./components/EducationList";
import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";
import { SkillList } from "./components/SkillList";
import { ContactForm } from "./components/ContactForm";
import { PageContent } from "./components/PageContent";

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Content>
        <Row style={{ height: "100%" }}>
          <Col
            md={12}
            xs={24}
            style={{ height: "100%", backgroundColor: "white" }}
          >
            <Hero
              name={data.name}
              description={data.description}
              links={data.links}
            />
          </Col>
          <Col
            md={12}
            xs={0}
            style={{
              height: "100vh",
              overflow: "auto",
              backgroundColor: "white",
              backgroundImage: `url("${CatWire}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              paddingBottom: "2rem",
            }}
          >
            <PageContent />
          </Col>
          <Col
            md={0}
            xs={24}
            style={{
              paddingBottom: "2rem",
            }}
          >
            <PageContent />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
