import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section, { Eyebrow } from "../components/Section";
import TeamCard from "../components/TeamCard";
import StatCounter from "../components/StatCounter";
import { team, stats } from "../data/team";

export default function About() {
  return (
    <>
      <Seo
        title="Hakkımızda"
        description="WeDo Robotics'in misyonu, öz değerleri ve alanında uzman eğitim kadrosu hakkında bilgi alın."
      />
      <PageHero
        eyebrow="Hakkımızda"
        title="Her Çocuk Mucit Doğar"
        subtitle="Okul öncesinden liseye kadar çocukların STEM ilkelerini robotik aracılığıyla keşfetmesi için buradayız."
      />

      <div className="relative -mt-10 sm:-mt-14 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-card">
          <img
            src="/assets/photos/home-hero.webp"
            alt="Bir çocuk LEGO Education parçalarını atölyede inceliyor"
            className="h-52 sm:h-72 w-full object-cover"
          />
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow color="blue">WeDo Robotics</Eyebrow>
            <h2 className="mt-3 font-display font-extrabold text-3xl text-ink">Yaparak, yaşayarak öğrenme</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              WeDo Robotics eğitim çözümleri, öğrencilerin aktif, katılımcı ve yaratıcı çözüm arayıcıları olmalarını
              sağlar. Öğrenciler LEGO parçalarını ve dijital araçları; yaratıcı problem çözmek, birlikte çalışmak ve
              eleştirel düşünmek için kullanır. Bu şekilde çalışarak ana müfredat konularını daha derinden kavrar,
              okulda ve sınavlarda daha başarılı olurlar.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Diğer kurumlardan farklı olarak atölyelerimiz gerçek mühendisler, bilim insanları, öğretmenler ve
              sertifikalı eğitmenler tarafından yürütülür; çocuklara 21. yüzyıl becerilerine uygun bir öğrenim
              deneyimi sunarız.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-3xl bg-coral-light p-6">
              <p className="font-display font-bold text-coral-dark">Sevgi</p>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                Bilimi soyut bir kavram olmaktan çıkarıp elle tutulur, heyecan verici bir araca dönüştürüyoruz.
              </p>
            </div>
            <div className="rounded-3xl bg-mint-light p-6">
              <p className="font-display font-bold text-mint-dark">Öz Güven</p>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                Gerçek hayata dair problemler çözmelerini sağlayarak merak etmeyi ve soru sormayı teşvik ediyoruz.
              </p>
            </div>
            <div className="rounded-3xl bg-sun-light p-6">
              <p className="font-display font-bold text-sun-dark">Heyecan</p>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                Mühendislik, teknoloji ve kodlama deneyimleriyle bilimden heyecan duymalarını sağlıyoruz.
              </p>
            </div>
            <div className="rounded-3xl bg-grape-light p-6">
              <p className="font-display font-bold text-grape">Bütünsellik</p>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                Fen, Teknoloji, Mühendislik ve Matematiği (STEM) birbirine bağlı tek bir deneyim olarak sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-blue relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <StatCounter key={s.id} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <Section>
        <div className="text-center mb-12">
          <Eyebrow color="grape">Ekibimiz</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">Nitelikli Öğretmenler</h2>
          <p className="mt-3 text-ink-soft max-w-2xl mx-auto">
            Hem çocuklarla hem de ailelerle güvenilir ve saygılı ilişkiler kurmak ve sürdürmek için birlikte
            çalışıyoruz.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-3xl bg-mint-light p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <Eyebrow color="mint">Güvenli Öğrenme Ortamı</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-ink">Hijyen ve Güvenlik Önceliğimiz</h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Çocuklara mümkün olan en güvenli ve en iyi öğrenme deneyimini sağlamak için sınıflarımızı ve LEGO®
            Education setlerimizi düzenli olarak temizleyip dezenfekte ediyoruz. Her çocuk kendine ayrılmış çalışma
            alanını kullanır.
          </p>
        </div>
      </Section>
    </>
  );
}
