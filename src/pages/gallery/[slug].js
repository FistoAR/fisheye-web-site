import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import { galleries } from '../../components/Gallerys/Gallerys';
import Head from 'next/head';
import Image from "next/image";

// ⬇️ Add this export to generate pages for each slug at build time
export async function getStaticPaths() {
  const paths = galleries.map((gallery) => ({
    params: { slug: gallery.slug },
  }));

  return {
    paths,
    fallback: false, // return 404 for unknown slugs
  };
}

// ⬇️ Pass the correct section data to the component
export async function getStaticProps({ params }) {
  const section = galleries.find((g) => g.slug === params.slug);

  return {
    props: { section },
  };
}
 
const GallerySectionPage = () => {
  const router = useRouter();
  const { slug } = router.query;
 
 if (!slug) return <p>Loading...</p>;

  const section = galleries.find((g) => g.slug === slug);
   
  if (!section) return <div>Gallery not found</div>;
 
  return (
    <div className="gallery-section-page">
       <Head>
        <title>Gallery of Fisheye</title>
        <meta name="description" content="Fisheye Home Interiors gallery demonstrates designs of modular kitchen, bedroom, living and dining. View photos of interior works across Coimbatore." />
        <meta name="keywords" content="home interior gallery, modular kitchen photos, bedroom design images, living room interiors, dining room designs, interior design portfolio, contemporary interiors, modern kitchen gallery, stylish room interiors, interior design photographs, modular furniture designs, client projects, home decor gallery, luxury interiors gallery, interior inspiration" />
        <meta property="og:title" content="Gallery of Home Interior Designs | Original Photographs by Fisheye" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fisheye-interior.com/assets/images/gallery-og-image.jpg" />
        <meta property="og:url" content="https://fisheye-interior.com/gallery" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content="Fisheye Home Interiors gallery demonstrates designs of modular kitchen, bedroom, living and dining. View photos of interior works across Coimbatore." />
        <meta property="og:site_name" content="Fisheye Interiors" />
         <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <div className="gallery-section-head">
        <h4>{section.title}</h4>
        <p>{section.para2}</p>
        <div className="gallery-grid">
          {section.images.map((img, idx) => (
            <div key={idx} className="gallery-image-block">
              <Image src={img.src} alt={img.name}/>
              {/* <img src={img.src} alt={img.name} /> */}
              <div>{img.name}</div>
              <div>{img.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default GallerySectionPage;