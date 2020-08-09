import React from 'react';
import { useParams } from 'react-router-dom';

const IMAGES = [
    { id: 0, title: "Dark Orchid", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" },
    { id: 1, title: "Lime Green", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" },
    { id: 2, title: "Tomato", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" },
    { id: 3, title: "Seven Ate Nine", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg789" },
    { id: 4, title: "Crimson", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" }
  ];


export default 
function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.src}/>
    </div>
  );
}

