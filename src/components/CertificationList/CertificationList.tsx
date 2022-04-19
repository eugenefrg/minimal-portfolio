import { Col, Typography, Card, Space } from "antd";
import { Certificate } from "../../assets/data/types";
import { ReactComponent as ExternalLink } from "../../assets/images/icons/external-link.svg";

interface CertificationListProps {
  /**
   * The list of certificates to display
   */
  certifications: Certificate[];
}

const CertificationList: React.FC<CertificationListProps> = ({
  certifications,
}) => {
  return (
    <Col span={22} offset={1}>
      <Typography.Title level={2}>Certifications</Typography.Title>
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          {certifications.map((certification) => {
            return (
              <Typography>
                <Typography.Paragraph>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Space align="start">
                      <Typography.Text strong>
                        {certification.source}
                      </Typography.Text>
                      <Typography.Text>{certification.name}</Typography.Text>
                      <Typography.Text>
                        <ExternalLink style={{ height: "1.1rem" }} />
                      </Typography.Text>
                    </Space>
                  </a>
                </Typography.Paragraph>
              </Typography>
            );
          })}
        </Space>
      </Card>
    </Col>
  );
};

export default CertificationList;
