import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyRow({ mainMessage, subMessage, link = undefined }) {
  return (
    <p className="px-2 py-4 text-center min-h-[200px]">
      {mainMessage && mainMessage}
      {link && (
        <Link className="hover:text-cyan-700" to={link}>
          {subMessage}
        </Link>
      )}
    </p>
  );
}
