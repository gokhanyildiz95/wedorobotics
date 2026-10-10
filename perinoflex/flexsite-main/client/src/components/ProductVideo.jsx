import { ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductVideo({ showCaption = true }) {
  const { language, content } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playButtonLabel = language === 'tr' ? 'Perino-Flex videosunu oynat' : 'Play Perino-Flex video';

  return (
    <div>
      <div className="video-frame">
        {isVideoPlaying ? (
          <iframe
            src="https://www.youtube.com/embed/VDCYlbVxCkg?autoplay=1&rel=0&modestbranding=1&playsinline=1"
            title="Perino-Flex"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img
              className="video-poster"
              src="https://img.youtube.com/vi/VDCYlbVxCkg/maxresdefault.jpg"
              alt="Perino-Flex video"
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.src = 'https://img.youtube.com/vi/VDCYlbVxCkg/hqdefault.jpg';
              }}
            />
            <button
              type="button"
              className="video-play-button"
              onClick={() => setIsVideoPlaying(true)}
              aria-label={playButtonLabel}
            >
              <Play size={34} fill="currentColor" />
            </button>
          </>
        )}
      </div>
      {showCaption ? (
        <div className="video-caption-row">
          <span>{content.perinoFlex.videoCaption}</span>
          <a href="https://www.youtube.com/watch?v=VDCYlbVxCkg" target="_blank" rel="noreferrer">
            {content.perinoFlex.videoLink} <ExternalLink size={15} />
          </a>
        </div>
      ) : null}
    </div>
  );
}
