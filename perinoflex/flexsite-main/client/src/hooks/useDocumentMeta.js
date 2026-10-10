import { useEffect } from 'react';

export function useDocumentMeta(pageTitle, pageDescription) {
  useEffect(() => {
    document.title = pageTitle;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', pageDescription);
  }, [pageTitle, pageDescription]);
}
