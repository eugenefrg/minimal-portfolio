import { Col, Typography, Space } from "antd";
import { Links } from "../../assets/data/types";
import { ReactComponent as Twitter } from "../../assets/images/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/icons/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/images/icons/github.svg";
import { ReactComponent as AtSign } from "../../assets/images/icons/at-sign.svg";
import { ReactComponent as CatFull } from "../../assets/images/siteDesign/catFull.svg";

interface HeroProps {
  /**
   * The name of the person
   */
  name: string;
  /**
   * The title of the person
   */
  description: string;
  /**
   * The list of links to display
   */
  links: Links[];
}

const Hero: React.FC<HeroProps> = ({ name, description, links }) => {
  return (
    <Col
      span={12}
      offset={6}
      style={{
        height: "inherit",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CatFull />
      <Typography.Title level={1}>
        <span className="name">{name}</span>
      </Typography.Title>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <Space>
        {links.map((link) => {
          return (
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name === "twitter" && <Twitter />}
              {link.name === "linkedIn" && <LinkedIn />}
              {link.name === "github" && <GitHub />}
              {link.name === "email" && <AtSign />}
            </a>
          );
        })}
      </Space>
    </Col>
  );
};

export default Hero;
