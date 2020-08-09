import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


const IMAGES = [
  { id: 0, title: "Dark Orchid", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" },
  { id: 1, title: "Lime Green", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" },
  { id: 2, title: "Tomato", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" },
  { id: 3, title: "Seven Ate Nine", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg789" },
  { id: 4, title: "Crimson", src: "https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" }
];


export default function Modal() {
    let history = useHistory();
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>{image.title}</h1>
          <img src={image.src} />
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    );
  }
  