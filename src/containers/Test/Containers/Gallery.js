import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Thumbnail } from '../Components/Thumbnail';

const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
  ];


export default function Gallery() {
    let location = useLocation();
  
    return (
      <div>
        {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
          >
            <Thumbnail color={i.color} />
            <p>{i.title}</p>
          </Link>
        ))}
      </div>
    );
  }
  