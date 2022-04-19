import { Col, Layout, Row, Space } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import data from "./assets/data";
import CatWire from "./assets/images/siteDesign/catWire-pass-thru-40.svg";
import { CertificationList } from "./components/CertificationList";
import { EducationList } from "./components/EducationList";
import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";
import { SkillList } from "./components/SkillList";

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Content>
        <Row style={{ height: "100%" }}>
          <Col span={12} style={{ height: "100%" }}>
            <Hero
              name={data.name}
              description={data.description}
              links={data.links}
            />
          </Col>
          <Col
            span={12}
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
              <Row style={{ height: "100vh" }} />
              <Row>
                <ProjectsList projects={data.projects} />
              </Row>
              <Row>
                <EducationList educations={data.educations} />
              </Row>
              <Row>
                <SkillList skills={data.skills} />
              </Row>
              <Row>
                <CertificationList certifications={data.certifications} />
              </Row>
            </Space>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
