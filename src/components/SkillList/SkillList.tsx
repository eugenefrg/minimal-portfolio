import { Card, Col, Popover, Space, Typography } from "antd";
import { Skill } from "../../assets/data/types";
import { getSkillsBySkillLevel } from "./helpers/getSkillsBySkillLevel";

interface SkillListProps {
  /**
   * The list of skills to display
   */
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  /**
   * Get skills and organize by level
   */
  const skillLevels: { [key: string]: Skill[] } = getSkillsBySkillLevel(skills);
  return (
    <Col span={22} offset={1}>
      <Typography.Title level={2}>Skills</Typography.Title>
      {/* for all skill levels, display skill images. */}
      {Object.keys(skillLevels).map((skillLevel) => {
        return (
          <Card>
            <Typography.Title
              level={4}
              style={{
                textTransform: "capitalize",
              }}
            >
              {skillLevel}
            </Typography.Title>
            <Space wrap>
              {skillLevels[skillLevel].map((skill) => {
                return (
                  <Popover content={skill.name}>
                    <img src={skill.iconUrl} alt={skill.name} height="48" />
                  </Popover>
                );
              })}
            </Space>
          </Card>
        );
      })}
    </Col>
  );
};

export default SkillList;
