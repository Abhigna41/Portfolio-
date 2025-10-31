
'use client';

import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiMysql } from 'react-icons/si';

const iconMap: { [key: string]: React.ElementType } = {
  html: FaHtml5,
  css: FaCss3Alt,
  mysql: SiMysql,
  python: FaPython,
  firebase: SiFirebase,
  javascript: FaJs,
  react: FaReact,
  git: FaGitAlt,
};

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Icon({ name, className, style }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null; // Or return a default icon
  }

  return <IconComponent className={className} style={style} />;
}
