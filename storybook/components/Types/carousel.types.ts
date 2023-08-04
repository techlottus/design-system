import { CardType } from "@lottuseducation/design_system/lib/esm/components/Types/Card.types";

export interface CarouselType {
  /**Array of cards data */
  data: CardType[];
  /**Carousel of cards or images */
  variant?: "card" | "image";
}
