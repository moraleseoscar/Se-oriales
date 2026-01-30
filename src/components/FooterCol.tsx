export type FooterColProps = {
  title: string;
  items: string[];
};

export default function FooterCol({ title, items }: FooterColProps) {
  return (
    <div className="footerCol">
      <div className="footerCol__title">{title}</div>
      <ul className="footerCol__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
