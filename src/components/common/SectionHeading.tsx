type Props = {
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-medium capitalize">{title}</h2>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
