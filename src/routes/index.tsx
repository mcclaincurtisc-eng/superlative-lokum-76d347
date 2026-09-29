import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowUpRight, Diamond, Eye, Sparkles, Users } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const image = (file: string, width: number, height?: number) =>
  `/.netlify/images?url=/img/${file}&w=${width}${height ? `&h=${height}&fit=cover` : ''}&q=84`

const formats = [
  { number: '01', title: 'At the table', label: 'Close-up magic', text: 'Cards, borrowed objects, and impossible moments unfold inches from your eyes. Best for dinners, cocktail hours, and intimate rooms.', image: 'close-up-table.jpg', alt: 'A magician astonishing guests around a small table' },
  { number: '02', title: 'For every age', label: 'Family gatherings', text: 'Warm, visual, and made to bring generations together. The audience becomes part of the story without ever becoming the joke.', image: 'family-parlor.jpg', alt: 'Children and adults watching a magician perform at a table' },
  { number: '03', title: 'For the whole room', label: 'Parlor & stage', text: 'A focused show with bigger stories and shared surprises—designed for theaters, company events, and audiences ready to lean in.', image: 'theater-show.png', alt: 'A magician performing on stage in front of a seated audience' },
]

function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="The Art of Astonishment home"><Diamond size={16} strokeWidth={1.5} /><span>THE ART OF<br />ASTONISHMENT</span></a>
        <div className="nav-links"><a href="#experience">The experience</a><a href="#formats">Show formats</a><a href="#gallery">Gallery</a></div>
        <a className="nav-cta" href="#formats">Explore the show <ArrowDown size={15} /></a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Modern conjuring · timeless wonder</p>
          <h1>Where the<br /><em>impossible</em><br />feels personal.</h1>
          <p className="intro">An invitation to look closer. Intimate sleight of hand, thoughtful storytelling, and astonishment shared in the same room.</p>
          <a className="text-link" href="#experience">Discover the experience <ArrowDown size={18} /></a>
        </div>
        <div className="hero-image-wrap">
          <span className="vertical-note">PERCEPTION · MISDIRECTION · WONDER</span>
          <div className="hero-frame"><img src={image('king-reveal.png', 900, 820)} alt="Magician holding the king of clubs as cards float around him" /></div>
          <span className="edition">EST. IN<br />IMAGINATION</span>
        </div>
      </header>

      <section className="manifesto" id="experience">
        <div className="section-mark"><Eye size={18} /><span>THE EXPERIENCE</span></div>
        <p className="manifesto-lead">Magic is not about hiding the method.</p>
        <p className="manifesto-main">It is about creating one honest moment when certainty slips away—and a room full of people remembers how to <em>wonder.</em></p>
        <div className="manifesto-foot"><p>No camera tricks. No distant screen. Just the electric space between what you see and what you know.</p><span>Scroll to explore <ArrowDown size={16} /></span></div>
      </section>

      <section className="formats" id="formats">
        <div className="section-heading"><div><p className="eyebrow"><span /> THREE WAYS TO WONDER</p><h2>A show for<br />the room you’re in.</h2></div><p>From the hush around one table to the energy of a full theater, each format keeps the magic human, immediate, and close enough to feel.</p></div>
        <div className="format-list">
          {formats.map((format, index) => (
            <article className="format-card" key={format.number}>
              <div className="format-image"><img src={image(format.image, 780, 900)} alt={format.alt} loading={index ? 'lazy' : 'eager'} /></div>
              <div className="format-copy"><span className="format-number">{format.number}</span><p className="format-label">{format.label}</p><h3>{format.title}</h3><p>{format.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band"><Sparkles size={21} /><blockquote>“The best trick is not making something vanish.<br />It’s making everyone present.”</blockquote><span>THE PHILOSOPHY</span></section>

      <section className="gallery" id="gallery">
        <div className="gallery-heading"><p className="eyebrow"><span /> IN THE MOMENT</p><h2>Wonder,<br /><em>caught in the act.</em></h2><p>The real magic lives in the reaction: the half-second between disbelief and delight.</p></div>
        <figure className="gallery-a"><img src={image('card-storm-street.png', 820, 1050)} alt="Magician surrounded by a crowd and a shower of playing cards" loading="lazy" /><figcaption>Impossible weather</figcaption></figure>
        <figure className="gallery-b"><img src={image('learning-magic.jpg', 680, 900)} alt="Children watching a close-up magic demonstration" loading="lazy" /><figcaption>A closer look</figcaption></figure>
        <figure className="gallery-c"><img src={image('card-storm-room.png', 740, 980)} alt="An indoor audience reacting as playing cards fill the air" loading="lazy" /><figcaption>The room erupts</figcaption></figure>
      </section>

      <footer><div className="footer-icon"><Users size={25} strokeWidth={1.3} /></div><p className="eyebrow"><span /> AN EXPERIENCE SHARED</p><h2>Come curious.<br /><em>Leave astonished.</em></h2><a href="#top">Return to the beginning <ArrowUpRight size={17} /></a><div className="footer-bottom"><span>THE ART OF ASTONISHMENT</span><span>Close-up · Parlor · Stage</span><span>Built for wonder</span></div></footer>
    </main>
  )
}
