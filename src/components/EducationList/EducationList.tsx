import { Col, Typography, Card, Space } from "antd";
import { Education } from "../../assets/data/types";

interface EducationListProps {
  /**
   * The list of education to display
   */
  educations: Education[];
}

const EducationList: React.FC<EducationListProps> = ({ educations }) => {
  return (
    <Col span={22} offset={1}>
      <Typography.Title level={2}>Education</Typography.Title>
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          {educations
            .sort((a, b) => b.yearStart - a.yearStart)
            .map((education) => {
              return (
                <Typography>
                  <Typography.Title level={4}>
                    {education.name} - {education.description}
                  </Typography.Title>
                  <Typography.Paragraph>
                    <Space>
                      <Typography.Text>{education.yearStart}</Typography.Text>
                      {education.yearEnd && (
                        <Typography.Text>
                          to {education.yearEnd}
                        </Typography.Text>
                      )}
                      {education.finished === false && (
                        <Typography.Text disabled italic>
                          Did not finish
                        </Typography.Text>
                      )}
                    </Space>
                  </Typography.Paragraph>
                </Typography>
              );
            })}
        </Space>
      </Card>
    </Col>
  );
};

export default EducationList;
