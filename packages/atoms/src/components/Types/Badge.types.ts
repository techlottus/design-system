export interface IBadge {
  className?: string;
  content?: string;
  disabled?: boolean;
  intent?: BadgeIntents;
  roundedFull?: boolean;
  style?: React.CSSProperties;
}
const Intent = {
  ERROR: "error" as "error",
  WARNING: "warning" as "warning",
  SUCCESS: "success" as "success",
  INFO: "info" as "info",
}

type BadgeIntents = typeof Intent[keyof typeof Intent];
