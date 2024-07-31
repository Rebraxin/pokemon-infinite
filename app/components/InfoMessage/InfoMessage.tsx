import React from "react";

interface InfoMessageProps {
  count: number;
}

const InfoMessage = ({ count }: InfoMessageProps) => {
  return (
    <div role="alert" className="alert mb-10">
      <span>{count} Pokémon ont été trouvés</span>
    </div>
  );
};

export default InfoMessage;
