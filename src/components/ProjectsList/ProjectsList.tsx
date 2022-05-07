import React from "react";
import { Col, Typography, Space, Card, Row } from "antd";
import { Project } from "../../assets/data/types";

interface ProjectsProps {
  /**
   * The list of projects to display
   */
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Col span={22} offset={1}>
      <Typography.Title level={2}>Projects</Typography.Title>
      <Space direction="vertical">
        {projects.map((project) => {
          return (
            <Card>
              <Row gutter={8}>
                <Col span={10}>
                  <img src={project.imageUrl} alt={project.name} width="100%" />
                </Col>
                <Col span={14}>
                  <Typography.Title level={4}>{project.name}</Typography.Title>
                  <Typography.Paragraph>
                    {project.description}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.demoUrl}
                    </a>
                  </Typography.Paragraph>
                  {project.repoUrl && (
                    <Typography.Paragraph>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </Typography.Paragraph>
                  )}
                </Col>
              </Row>
            </Card>
          );
        })}
      </Space>
    </Col>
  );
};

export default ProjectsList;
