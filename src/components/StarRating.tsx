import { Star, StarHalf, StarOff } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const starNumber = index + 1;
        if (starNumber <= rating) {
          return <Star key={index} className="w-5 h-5 text-accent fill-current" />;
        } else if (starNumber - 0.5 <= rating) {
          return <StarHalf key={index} className="w-5 h-5 text-accent" />;
        } else {
          return <StarOff key={index} className="w-5 h-5 text-accent" />;
        }
      })}
    </div>
  );
};

export default StarRating;