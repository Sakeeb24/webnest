import React from 'react';
import Packages from './Packages';

/**
 * Backward compatibility wrapper.
 * Directly proxies to the client-focused Packages component (zero pricing).
 */
export default function Pricing({ onSelectTier, onSelectPackage }) {
  return <Packages onSelectPackage={onSelectPackage || onSelectTier} />;
}
