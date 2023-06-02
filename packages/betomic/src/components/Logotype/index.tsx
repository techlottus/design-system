import React from "react";

type IsotypeProps = {
  className?: string;
}

type LogotypeComposition = {
  Isotype: React.FC<IsotypeProps>
}

const Isotype: React.FC<IsotypeProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="36" height="44" fill="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.7 0L0 12.7v18.6L6.7 44h17l8.9-4 3.4-9.6-5.2-8.3 5.2-8.4-3.7-10L23.7 0h-17zm2.4 29V15l3.1-6H22l3.2 1.4.8 2.3-5.8 9.4 5.8 9.4-.6 1.9-3.5 1.5h-9.6l-3-5.8z"
        clipRule="evenodd" />
    </svg>
  );
}

type LogotypeProps = {
  className?: string;
}

const Logotype: React.FC<LogotypeProps> & LogotypeComposition = ({ className }) => {
  return (
    <svg className={className} width="136" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.8 27.4 89 28.6H78.6V7.4H89l2.7 1.2 1 2.9v13.3l-.9 2.6ZM97.6 3l-7-3H71v36h19.5l7.2-3.2 2.5-6.8V10.2L97.5 3ZM20.7 27.3 18 28.6H10l-2.5-4.8V12.2L10 7.4h8l2.6 1.1.6 1.9-4.7 7.7 4.8 7.7-.6 1.5Zm8.8-16.1-3-8.2-7-3h-14L0 10.4v15.2L5.5 36h14l7.2-3.2 2.8-7.9-4.3-6.8 4.3-7ZM128.5 0v26.2l-4.8 2.4h-5.4l-4.8-2.4V0H106v30.7l10.5 5.3h9l10.5-5.3V0h-7.5ZM65.4 0H44.7v7.4h20.7V0ZM65.4 28.6H44.7V36h20.7v-7.4ZM50 20.2V16l-1.2-1.1h-4.1v-4.1l-1.2-1.1h-4.2l-1.1 1V15H34l-1.2 1v4.3l1.1 1.1h4.2v4.1l1.1 1.1h4.2l1.2-1v-4.2h4l1.2-1.1Z" fill="currentColor"/>
    </svg>
  );
}

Logotype.Isotype = Isotype;

export default Logotype;
