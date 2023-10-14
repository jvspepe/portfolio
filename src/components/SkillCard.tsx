import Icon from "./Icon";

type Props = {
  icon: string;
  label: string;
};

function SkillCard({ icon, label }: Props) {
  return (
    <div
      title={label}
      className="flex flex-col items-center justify-center gap-4"
    >
      <Icon name={icon} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default SkillCard;
