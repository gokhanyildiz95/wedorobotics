import { Crosshair, Hand, Move3D, Rotate3D, Settings2, SlidersHorizontal, Target, Workflow } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

function AdvantageRow({ number, Icon, title, description, intro, points }) {
  return (
    <ScrollReveal className="advantage-row">
      <div className="advantage-icon"><Icon /></div>
      <div className="advantage-content">
        <span className="advantage-number">{number}</span>
        <h3>{title}</h3>
        {intro ? <p>{intro}</p> : null}
        {description ? <p>{description}</p> : null}
        {Array.isArray(points) && points.length > 0 ? (
          <ul className="advantage-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </ScrollReveal>
  );
}

export default function ProductAdvantages() {
  const { content } = useLanguage();
  const advantages = content.perinoFlex;

  return (
    <div className="advantage-list">
      <AdvantageRow
        number="01"
        Icon={SlidersHorizontal}
        title={advantages.advantageOneTitle}
        intro={advantages.advantageOneIntro}
        points={advantages.advantageOnePoints}
      />
      <AdvantageRow number="02" Icon={Target} title={advantages.advantageTwoTitle} description={advantages.advantageTwoText} />
      <AdvantageRow number="03" Icon={Crosshair} title={advantages.advantageThreeTitle} description={advantages.advantageThreeText} />
      <AdvantageRow number="04" Icon={Rotate3D} title={advantages.advantageFourTitle} description={advantages.advantageFourText} />
      <AdvantageRow number="05" Icon={Hand} title={advantages.advantageFiveTitle} description={advantages.advantageFiveText} />
      <AdvantageRow number="06" Icon={Move3D} title={advantages.advantageSixTitle} description={advantages.advantageSixText} />
      <AdvantageRow number="07" Icon={Workflow} title={advantages.advantageSevenTitle} description={advantages.advantageSevenText} />
      <AdvantageRow number="08" Icon={Settings2} title={advantages.advantageEightTitle} description={advantages.advantageEightText} />
    </div>
  );
}
