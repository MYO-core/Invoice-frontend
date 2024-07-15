import React from 'react';

export default function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}
