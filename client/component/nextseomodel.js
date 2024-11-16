import { NextSeo } from 'next-seo';

const NextSeoModel = ({ title, description, url, keywords, imageUrl, schema }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: imageUrl || 'https://www.yourwebsite.com/images/default.jpg',
            alt: title,
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: keywords,
        },
      ]}
      twitter={{
        cardType: 'summary_large_image',
      }}
      schema={schema}
    />
  );
};

export default NextSeoModel;
