import { Space, Row, Col, Typography, Card } from "antd";
import data from "../../assets/data";
import { CertificationList } from "../CertificationList";
import { ContactForm } from "../ContactForm";
import { EducationList } from "../EducationList";
import { ProjectsList } from "../ProjectsList";
import { SkillList } from "../SkillList";
import React from "react";

const PageContent: React.FC = () => {
  return (
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
  );
};

export default PageContent;
