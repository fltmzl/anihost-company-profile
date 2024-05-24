import React, { Suspense, lazy } from "react";

interface DynamicIconProps {
  iconName: string;
  library: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, library }) => {
  const IconComponent = lazy(() =>
    import(`react-icons/${library}`).then((module) => ({
      default: module[iconName],
    }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent />
    </Suspense>
  );
};

export default DynamicIcon;
