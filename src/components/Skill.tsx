import Icon from "./Icon";

type Props = {
  icon: string;
  label: string;
};

function Skill({ icon, label }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Icon name={icon} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default Skill;
