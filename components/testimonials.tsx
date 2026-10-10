const principles = [
  { index: "01", title: "Clear communication", body: "Keep decisions visible, ask the useful questions early, and make progress easy to understand." },
  { index: "02", title: "Practical engineering", body: "Choose an approach that fits the product, its constraints, and the people who will maintain it." },
  { index: "03", title: "Thoughtful implementation", body: "Treat the details as part of the product — from empty states and edge cases to the final interaction." },
  { index: "04", title: "Maintainable solutions", body: "Write code that another developer can follow, extend, and trust after the first release." },
];

export function HowIWork() {
  return (
    <section className="principles-section section-light" aria-labelledby="principles-heading">
      <div className="section-topline wrap"><span className="section-index mono">07 / HOW I WORK</span><span className="mono">WORKING PRINCIPLES, NOT TESTIMONIALS</span></div>
      <div className="principles-heading wrap"><p className="eyebrow mono">NO MADE-UP ENDORSEMENTS</p><h2 id="principles-heading" className="display-heading">GOOD WORK IS<br /><span>A TEAM SPORT.</span></h2></div>
      <div className="principles-list wrap">
        {principles.map((principle) => <article className="principle-row" key={principle.index}><span className="mono">{principle.index}</span><h3>{principle.title}</h3><p>{principle.body}</p><span className="principle-arrow" aria-hidden="true">↗</span></article>)}
      </div>
    </section>
  );
}

export const Testimonials = HowIWork;
export default HowIWork;
