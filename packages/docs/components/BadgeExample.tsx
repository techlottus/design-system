import React from "react";
import { Badge } from "@exponentialeducation/betomic/src";

const BadgeCommonExample = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Badge
        content="I'm a badge"
      />
    </div>
  );
}

const CustomizeBadgeExample = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Badge
        content="Course"
        className="bg-surface-500 mr-4"
      />
      <Badge
        content="Module"
        className="bg-surface-200 text-secondary-900 mr-4"
      />
      <Badge
        content="Quiz Status"
        className="bg-blue-200 text-blue-900 mr-4"
      />
      <Badge
        content="Inactive"
        className="bg-surface-400 mr-4"
      />
      <Badge
        content="Disable"
        disabled
      />
    </div>
  );
}

const BadgeIntentsExample = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Badge
        content="Success"
        intent="success"
        className="mr-4"
      />
      <Badge
        content="Warning"
        intent="warning"
        className="mr-4"
      />
      <Badge
        intent="error"
        content="Error"
        className="mr-4"
      />
      <Badge
        content="Information"
        intent="info"
      />
    </div>
  );
}

const OvalBadgeExample = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Badge
        roundedFull
        className="bg-primary-500 font-bold mr-4"
      />
      
      <Badge
        roundedFull
        content="1"
        className="bg-surface-600 font-bold mr-4"
      />

      <Badge
        roundedFull
        content="1"
        className="bg-primary-500 font-bold"
      />
    </div>
  );
}

export {
  BadgeCommonExample,
  CustomizeBadgeExample,
  BadgeIntentsExample,
  OvalBadgeExample
}