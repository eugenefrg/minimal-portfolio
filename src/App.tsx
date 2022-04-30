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

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Content>
        <Row style={{ height: "100%" }}>
          <Col md={12} xs={24} style={{ height: "100%" }}>
            <Hero
              name={data.name}
              description={data.description}
              links={data.links}
            />
          </Col>
          <Col
            md={12}
            xs={24}
            style={{
              height: "100vh",
              overflow: "auto",
              backgroundImage: `url("${CatWire}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              paddingBottom: "2rem",
            }}
          >
            <Space direction="vertical" size="large">
              <Row>
                <SkillList skills={data.skills} />
              </Row>
              <Row>
                <CertificationList certifications={data.certifications} />
              </Row>
              <Row>
                <ProjectsList projects={data.projects} />
              </Row>
              <Row>
                <EducationList educations={data.educations} />
              </Row>
              <Row>
                <Col span={22} offset={1}>
                  <Typography.Title level={2}>Contact</Typography.Title>
                  <Card>
                    <ContactForm />
                  </Card>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
